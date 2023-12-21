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

export interface PageHighlight extends Schema.Component {
  collectionName: 'components_page_highlights';
  info: {
    displayName: 'highlight';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    background: Attribute.Media & Attribute.Required;
    floatImage: Attribute.Media;
    buttonLabel: Attribute.String & Attribute.Required;
    buttonLink: Attribute.String & Attribute.Required;
    alignment: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'right'>;
  };
}

export interface PagePopularGames extends Schema.Component {
  collectionName: 'components_page_popular_games';
  info: {
    displayName: 'popularGames';
    icon: 'sun';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    highlight: Attribute.Component<'page.highlight'>;
    games: Attribute.Relation<
      'page.popular-games',
      'oneToMany',
      'api::game.game'
    >;
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

export interface PageSection extends Schema.Component {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'section';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    highlight: Attribute.Component<'page.highlight'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.highlight': PageHighlight;
      'page.popular-games': PagePopularGames;
      'page.ribbon': PageRibbon;
      'page.section': PageSection;
    }
  }
}
