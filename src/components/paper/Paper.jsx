"use client";
const Paper = ({style, paperLabel}) => {
    return(
        <div className={style}>
            {paperLabel}
        </div>
    );
};

export default Paper;