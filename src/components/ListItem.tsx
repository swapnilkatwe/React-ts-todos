import React from "react";

const ListItem: React.FC<React.PropsWithChildren<{text: string}>> = (props) => {
    return (
        <li>{props.text}</li>
    );
}

export default ListItem;

// other example using Todo object

    // const ListItem: React.FC<React.PropsWithChildren<{item: Todo}>> = (props) => {
    //     return (
    //         <li key={props.item.id}>{props.item.text}</li>
    //     );
    // }


// const ListItem = (props) => {}; initial error function.