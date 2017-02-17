<@- block body @>
<@- block content @>
<@- block header @>
<a style="float:right;font-size:12px;" href="http://github.com/driftyco/ionic-native/edit/master/<$ doc.fileInfo.relativePath|replace('/home/ubuntu/ionic-native/', '')|replace('//','/') $>#L<$ doc.location.start.line $>">
  Improve this doc
</a>

# <$ doc.name $>
<!-- end header block -->
<@ endblock -@>

<@- if doc.beta == true @>
<p style="color:orange">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="<$ prop.repo $>/issues">plugin repo</a>.
</p>
<@ endif -@>

<@- for prop in doc.decorators[0].argumentInfo @>
```
$ <@ if prop.install @><$ prop.install $><@ else @>npm install @ionic-native/<$ doc.npmId $> --save<@ endif @>
```

## [Usage Documentation](https://ionicframework.com/docs/v2/native/<$ doc.fileInfo.relativePath|replace('/home/ubuntu/ionic-native/', '')|replace('//','/')|replace('index.ts','')|replace('src/@ionic-native/plugins/','') $>)

Cordova Repo: [<$ prop.repo $>](<$ prop.repo $>)

<!-- description -->
<@- block description @>
<$ doc.description $>
<@ endblock -@>

<@- if doc.directiveInfo @>
## <$ doc.directiveInfo.type $>
### <$ doc.directiveInfo.properties[0].name $>: `<$ doc.directiveInfo.properties[0].values $>`
<@ endif -@>

<@- if prop.platforms @>
<!-- @platforms tag -->
## Supported platforms
<@ block platforms @>
<@ for platform in prop.platforms -@>
- <$ platform $>
<@ endfor @>
<@ endblock -@>
<!-- @platforms tag end -->
<@ endif -@>
<!-- end for prop in method.decorators[0].argumentInfo -->
<@ endfor -@>
<!-- end content block -->
<@ endblock -@>
<!-- end body block -->
<@ endblock -@>
