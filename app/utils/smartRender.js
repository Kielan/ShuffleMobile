import React from 'react'

export const smartRender = (
  ElementOrComponentOrLiteral,
  props = {},
  fallback,
) => {
  if (ElementOrComponentOrLiteral === undefined) {
    ElementOrComponentOrLiteral = fallback;
  }
  if (React.isValidElement(ElementOrComponentOrLiteral)) {
    // Flow cast through any, to make flow believe it's a React.Element
    const element = ((ElementOrComponentOrLiteral));
    return element;
  }

  // Flow cast through any to remove React.Element after previous check
  const ComponentOrLiteral = (ElementOrComponentOrLiteral);
  if (
    typeof ComponentOrLiteral === 'string' ||
    typeof ComponentOrLiteral === 'number' ||
    typeof ComponentOrLiteral === 'boolean' ||
    ComponentOrLiteral == null
  ) {
    return ComponentOrLiteral;
  }
  return <ComponentOrLiteral {...props} />;
}
