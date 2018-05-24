### Element swc-avatar-uploader

A basic component to upload and show an avatar image

```html
  <swc-avatar-uploader id="avatar" avatar-label="Photo"
    avatar-image-alt="Photo"></swc-avatar-uploader>
```

### Styling

`<swc-avatar-uploader>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--swc-avatar-uploader-avatar-wrapper-bgcolor` | Var applied to set avatar background color | #FFFFFF
`--swc-avatar-uploader-avatar-wrapper-bshadow` | Var applied to set avatar box-shadow | {0 0 1px 0 rgba(0, 0, 0, .08), 0 1px 2px 0 rgba(0, 0, 0, .15)}
`--swc-avatar-uploader-avatar-focus-bordercolor` | Var applied to set avatar focus border color | #3D7389 
`--swc-avatar-uploader-avatar-wrapper-avatar-action` | Mixin applied to the main button and drop area | {}
`--swc-avatar-uploader-avatar-wrapper-avatar-action-hover` | Mixin applied to the hover state of the main button and dropping zone | {}
`--swc-avatar-uploader-avatar-wrapper-avatar-action-icon` | Mixin applied to the icon within the main button and dropping zone | {}
`--swc-avatar-uploader-avatar-wrapper-avatar-foot` | Mixin applied to the footer | {}
`--swc-avatar-uploader-avatar-wrapper-avatar-foot-span` | Mixin applied to the label of the footer | {}
`--swc-avatar-uploader-avatar-wrapper-avatar-foot-icon` | Mixin applied to the icon of the footer | {}
`--swc-avatar-uploader-avatar-footer-bgcolor` | Var applied to set avatar footer background color | #EEEEEE

### Install dependencies

```
$ npm install
```

### Viewing Your Element

```
$ npm run serve
```

### Running Tests

```
$ npm run test
```
