import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import Products from "../HomePage/Products";

const SortByButton = ({
    option,
    setSortDirection,
    setSortBy,
    enumKey,
    sortByTemp,
    setSortByTemp,
    sortDirectionTemp,
    setSortDirectionTemp,
}) => {
    const onClick = (e) => {
        if (sortByTemp === e.currentTarget.value) {
            if (sortDirectionTemp === "0") {
                setSortDirectionTemp("1");
                setSortDirection("1");
            } else {
                setSortDirectionTemp("0");
                setSortDirection("0");
            }
        } else {
            setSortBy(e.currentTarget.value);
            setSortByTemp(e.currentTarget.value);
            setSortDirection("0");
            setSortDirectionTemp("0");
        }
    };

    const upArrowActive = <i className="bi bi-arrow-up-circle-fill"></i>;
    const upArrowInactive = <i className="bi bi-arrow-up-circle"></i>;
    const downArrowActive = <i className="bi bi-arrow-down-circle-fill"></i>;
    const downArrowInactive = <i className="bi bi-arrow-down-circle"></i>;

    let upArrow = upArrowInactive;
    let downArrow = downArrowInactive;

    if (enumKey == sortByTemp) {
        if (sortDirectionTemp === "0") {
            upArrow = upArrowInactive;
            downArrow = downArrowActive;
        } else if (sortDirectionTemp === "1") {
            upArrow = upArrowActive;
            downArrow = downArrowInactive;
        } else {
            upArrow = upArrowInactive;
            downArrow = downArrowInactive;
        }
    }

    return (
        <div style={{ position: "relative", width: "160px" }} className="mt-3 mx-auto">
            <Button
                type={"button"}
                className={"w-100 text-dark fw-bold"}
                style={{ background: "#F4C04C", border: "none" }}
                value={enumKey}
                onClick={onClick}>
                {option === "Nothing" ? "Clear" : option}
            </Button>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translate(-50%, -50%)",
                }}>
                {option !== "Nothing" && upArrow}
                {option !== "Nothing" && downArrow}
            </div>
        </div>
    );
};

export default SortByButton;
