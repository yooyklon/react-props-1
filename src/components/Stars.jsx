import React from "react";

import Star from "./Star";

export default function Stars({ count }) {
  if (count < 1 || count > 7) {
    return null;
  }

  return (
    <ul class="card-body-stars u-clearfix">
      {[...new Array(count)].map(() => (
        <Star />
      ))}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};
