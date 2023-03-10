import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button, Col, Media } from "reactstrap";
import authService from "../api-authorization/authenticationService";
import { Navigate, useParams } from "react-router-dom";
import LogoutSuggestion from "./LogoutSuggestion";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import MediaQuery from "react-responsive";

const Login = ({ onChangeAuthenticated }) => {
    const { isRedirected } = useParams();
    const redirectMessage = isRedirected === "true" ? "You need to be logged in to perform this action" : "";
    const [validated, setValidated] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [userLoggedInSuccessfully, setUserLoggedInSuccessfully] = useState(false);

    const uploadForm = async (e) => {
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }

        e.preventDefault();
        setValidated(true);
        const formData = new FormData();

        for (let i = 0; i < e.target.length - 1; i++) {
            formData.append(e.target[i].name, e.target[i].value);
        }
        try {
            const res = await authService.login(formData);
            if (res["isSuccess"]) {
                setUserLoggedInSuccessfully(true);
                onChangeAuthenticated(true);
            } else {
                setValidationMessage("Username or password is incorrect.");
            }
        } catch (exception) {
            setValidationMessage("Username or password is incorrect.");
        }
    };

    return userLoggedInSuccessfully ? (
        redirectToHomePage()
    ) : authService.isAuthenticated() ? (
        <LogoutSuggestion />
    ) : (
        renderLoginForm(uploadForm, validated, validationMessage, redirectMessage)
    );
};

const redirectToHomePage = () => {
    return <Navigate replace={true} to={"/"} />;
};

const renderLoginForm = (uploadForm, validated, validationMessage, redirectMessage) => {
    return (
        <div className={"pt-5"}>
            <h2 className={"fw-bold text-center mt-5 mb-3"}>Login Form</h2>
            <Form
                encType={"multipart/form-data"}
                onSubmit={uploadForm}
                noValidate
                validated={validated}
                className={"w-50 m-auto position-relative"}>
                <Row>
                    <Col className={"mb-3 col-12 col-sm-6"}>
                        <FloatingLabel label={"Email: "}>
                            <Form.Control required type="email" placeholder="name@example.com" name={"Email"} />
                            <Form.Control.Feedback type={"invalid"}>Let us know who you are.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col className={"mb-3 col-12 col-sm-6"}>
                        <FloatingLabel label={"Password: "}>
                            <Form.Control required type="password" placeholder="HaRd.Pas$word3" name={"Password"} />
                            <Form.Control.Feedback type={"invalid"}>Proove it!</Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className={"text-danger text-center rounded p-1 mb-2 fw-bold"}>{validationMessage}</div>
                {redirectMessage ? <p className={"text-danger text-center fw-bold"}>{redirectMessage}</p> : <p></p>}
                <div className={"text-center"}>
                    <Button type="submit" className={"bg-primary w-100"}>
                        Login
                    </Button>
                </div>
                <MediaQuery minWidth={578}>
                    <Image src={"/register-img.png"} style={{ width: "35vw" }} className="d-block mx-auto mt-4" />
                </MediaQuery>
            </Form>
        </div>
    );
};

export default Login;
