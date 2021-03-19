import React from "react";

function Article(props: any) {
  return (
    <div>
      <p>
        {props.item.id}
        {props.item.headline}
      </p>
    </div>
  );
}

export default Article;
