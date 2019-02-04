<a style="float:right;font-size:12px;" href="http://github.com/ionic-team/ionic-native/edit/master/<$ doc.fileInfo.relativePath|replace('/home/ubuntu/ionic-native/', '')|replace('//','/') $>#L<$ doc.location.start.line $>">
  Improve this doc
</a>

# <$ doc.name $>

<@- if doc.beta == true @>
  <p style="color:orange">
    This plugin is still in beta stage and may not work as expected. Please
    submit any issues to the <a target="_blank"
    href="<$ prop.repo $>/issues">plugin repo</a>.
  </p>
<@ endif -@>


<@ for prop in doc.decorators[0].argumentInfo @>

```
$ <@ if prop.install @><$ prop.install $><@ else @>ionic cordova plugin add <$ prop.plugin $><@ endif @>
$ npm install @ionic-native/<$ doc.npmId $>
```

## [Usage Documentation](https://ionicframework.com/docs/native/<$ doc.fileInfo.relativePath|replace('/home/ubuntu/ionic-native/', '')|replace('//','/')|replace('index.ts','')|replace('src/@ionic-native/plugins/','') $>)

Plugin Repo: [<$ prop.repo $>](<$ prop.repo $>)

<$ doc.description $>

<@- if prop.platforms @>

## Supported platforms
<@ for platform in prop.platforms -@>
- <$ platform $>
<@ endfor @>

<@ endif -@>

<@ endfor @>
