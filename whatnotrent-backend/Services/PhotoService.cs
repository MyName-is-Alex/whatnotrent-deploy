using Duende.IdentityServer.EntityFramework.Entities;
using el_proyecte_grande.Daos.Implementation;
using el_proyecte_grande.Models;
using el_proyecte_grande.Utils;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NuGet.Protocol;

namespace el_proyecte_grande.Services;

public class PhotoService
{
    private const string IMGBB_API_KEY = "399ce08415a12e357e1540b0f276f320";
    private PhotoDaoDatabase _photoDao;
    
    public PhotoService(PhotoDaoDatabase photoDao)
    {
        _photoDao = photoDao;
    }
    
    public async Task<TaskResponse> UploadPhotosForProduct(List<IFormFile> images, int productId)
    {
        int index = 0;
        foreach (var image in images)
        {
            index++;
            var bytes = await image.GetBytes();
            var hexString = Convert.ToBase64String(bytes);

            var urlParameters = new Dictionary<string, string>
            {
                { "image", hexString }
            };
            var content = new FormUrlEncodedContent(urlParameters);
            
            using (HttpClient client = new HttpClient())
            {
                var response = await client.PostAsync($"https://api.imgbb.com/1/upload?key={IMGBB_API_KEY}", content);
                if (!response.IsSuccessStatusCode)
                {
                    return new TaskResponse
                    {
                        Message = "Bad Request",
                        IsSuccess = false
                    };
                }
                
                var jsonString = await response.Content.ReadAsStringAsync();
                var jsonResponse = JObject.Parse(jsonString);
                string photoUrl = jsonResponse.SelectToken("$.data['display_url']").Value<string>();
                if (photoUrl == null)
                {
                    return new TaskResponse
                    {
                        Message = "The api route is good but something went wrong.",
                        IsSuccess = false
                    };
                } 
                
                ProductPhoto productPhoto = new ProductPhoto
                {
                    ProductId = productId,
                    PhotoUrl = photoUrl
                };
                _photoDao.Add(productPhoto);
            }
        }
        return new TaskResponse
        {
            Message = "The images are on the cloud",
            IsSuccess = true
        };
    }

    public async Task<TaskResponse> UploadPhotoForUser(IFormFile image, string userId)
    {
        var bytes = await image.GetBytes();
        var hexString = Convert.ToBase64String(bytes);

        var urlParameters = new Dictionary<string, string>
        {
            { "image", hexString }
        };
        var content = new FormUrlEncodedContent(urlParameters);
            
        using (HttpClient client = new HttpClient())
        {
            var response = await client.PostAsync($"https://api.imgbb.com/1/upload?key={IMGBB_API_KEY}", content);
            if (!response.IsSuccessStatusCode)
            {
                return new TaskResponse
                {
                    Message = "Bad Request",
                    IsSuccess = false
                };
            }
                
            var jsonString = await response.Content.ReadAsStringAsync();
            var jsonResponse = JObject.Parse(jsonString);
            string photoUrl = jsonResponse.SelectToken("$.data['display_url']").Value<string>();
            if (photoUrl == null)
            {
                return new TaskResponse
                {
                    Message = "The api route is good but something went wrong.",
                    IsSuccess = false
                };
            }

            return new TaskResponse
            {
                Message = photoUrl,
                IsSuccess = true
            };
        }
    }
}