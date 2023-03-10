import Nav from "react-bootstrap/Nav";
import { useRef, useState } from "react";
import Categories from "../UtilityComponents/Categories";
import SortBy from "../UtilityComponents/SortByComponent";
import loginForm from "../AuthenticationForms/LoginForm";

const ProductsHeader = ({
    setCategory,
    formCategories,
    setSortBy,
    setSortDirection,
    sortByEnum,
    sortDirectionEnum,
    category,
    sortBy,
    sortDirection,
}) => {
    const [content, setContent] = useState();
    const [hidden, setHidden] = useState(true);
    const displayContainer = useRef();

    const onClick = (e, action) => {
        const siblings = [];
        let sibling = e.currentTarget.parentNode.parentNode.firstChild;

        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e.currentTarget.parentNode) {
                siblings.push(sibling.firstChild);
            }
            sibling = sibling.nextSibling;
        }

        switch (action) {
            case "category":
                setContent(<Categories formCategories={formCategories} setCategory={setCategory} />);
                setHidden(false);
                break;
            case "sort":
                setContent(
                    <SortBy
                        category={category}
                        setSortBy={setSortBy}
                        setSortDirection={setSortDirection}
                        sortByEnum={sortByEnum}
                        sortDirectionEnum={sortDirectionEnum}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                );
                setHidden(false);
                break;
        }
    };

    return (
        <div className={"mt-4 mb-4 w-75 m-auto"}>
            <Nav fill variant={"tabs"}>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-1"
                        onClick={(e) => onClick(e, "category")}
                        className={"fw-bold fs-5 text-black"}
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}>
                        Category
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-2"
                        onClick={(e) => onClick(e, "sort")}
                        className={"fw-bold fs-5 text-dark"}
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}>
                        Sort By
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div ref={displayContainer}>{content}</div>
        </div>
    );
};

const onMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#c6c6c6";
};
const onMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#F2F4F5";
};

export default ProductsHeader;
