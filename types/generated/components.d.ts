import type { Schema, Struct } from '@strapi/strapi';

export interface BasicImage extends Struct.ComponentSchema {
  collectionName: 'components_basic_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    src: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.image': BasicImage;
    }
  }
}
