import type { Schema, Attribute } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Buy now'>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface PageRibbon extends Schema.Component {
  collectionName: 'components_page_ribbons';
  info: {
    displayName: 'ribbon';
    icon: 'priceTag';
  };
  attributes: {
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['normal', 'small']> &
      Attribute.DefaultTo<'normal'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.ribbon': PageRibbon;
    }
  }
}
