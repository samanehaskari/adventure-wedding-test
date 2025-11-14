import React from "react";

export default function Typography({
  variant = "body1",
  as,
  children,
  className = "",
  style: customStyle = {},
  ...rest
}) {
  const Component = as || "p";
  const typographyClass = `typography-${variant}`;

  return (
    <Component
      className={`${typographyClass} ${className}`}
      style={customStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
