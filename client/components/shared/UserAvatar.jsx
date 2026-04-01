"use client";
import { useState } from "react";

export default function UserAvatar({
  user,
  imgClassName,
  imgStyle,
  fallbackClassName,
  fallbackStyle,
  fallbackSpanStyle,
}) {
  const [error, setError] = useState(false);
  const src = user?.image || user?.avatar || user?.picture;

  if (src && !error) {
    return (
      <img
        src={src}
        alt={user?.name || "User"}
        className={imgClassName}
        style={imgStyle}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div className={fallbackClassName} style={fallbackStyle}>
      <span style={fallbackSpanStyle}>
        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
      </span>
    </div>
  );
}
