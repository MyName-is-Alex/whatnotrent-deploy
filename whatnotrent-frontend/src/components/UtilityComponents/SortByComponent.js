import { Col, Row } from "reactstrap";
import SortByButton from "./SortByButton";
import { useEffect, useState } from "react";

const SortByComponent = ({
    setSortBy,
    setSortDirection,
    sortByEnum,
    sortDirectionEnum,
    category,
    sortBy,
    sortDirection,
}) => {
    const [sortByTemp, setSortByTemp] = useState(sortBy);
    const [sortDirectionTemp, setSortDirectionTemp] = useState(sortDirectionEnum);

    if (category === "10") {
        return (
            <p className="text-danger fw-bold text-center pt-4">
                Sorting option is available after you choose a category
            </p>
        );
    }
    return (
        <Row className={"pt-3 mt-3 justify-content-center"}>
            {Object.keys(sortByEnum).map((key) => (
                <Col key={key}>
                    <SortByButton
                        option={sortByEnum[key]}
                        sortByTemp={sortByTemp}
                        setSortByTemp={setSortByTemp}
                        setSortBy={setSortBy}
                        setSortDirection={setSortDirection}
                        sortDirectionTemp={sortDirectionTemp}
                        setSortDirectionTemp={setSortDirectionTemp}
                        enumKey={key}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default SortByComponent;
