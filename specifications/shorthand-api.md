# Shorthand API

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
  - [DOM Structure Ownership](#dom-structure-ownership)
  - [Intuition & Effort](#intuition--effort)
  - [Brittle Variations](#brittle-variations)
  - [Declarative](#declarative)
- [Proposals](#proposals)
  - [Goal](#goal)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why?

### DOM Structure Ownership

Users require components to have certain a style or behavior. Components may require a specific DOM structure to achieve a certain style or behavior. The DOM structure of a component is then the sole responsibility of the component, not the user.

### Intuition & Effort

The user's needs and intuitions are centered on defining the style and behavior of a component, not its structure.  When describing a component to a colleague we do not describe HTML structures, we use adjectives.  When defining a component via an API, we should strive to use the same natural language.  This frees the developer's mind to spend its effort creating actual features opposed to creating implementations of features.

### Brittle Variations

Component variations often require a variation in markup.  This only exacerbates the previously described issues.  API surface is bloated, potentials for bugs are inflated, requires memorizing more markup, and creates more distractions for the developer.  It is not creating features. 

### Declarative

Concerns with wrapping elements, child ordering, etc. are implementation details. The consumer should only be concerned with declaratively describing the component.

## Proposals

A powerful props API that:
1. Handles component markup
1. Allows controlling the rendered component
1. Allows controlling props 
1. Allows controlling the rendered tree 

### Goal

[Description]

[Implementation]
