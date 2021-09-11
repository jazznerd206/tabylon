<h1 align="center">tabylon</h1>
<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/The_walls_of_Babylon_and_the_temple_of_Bel.png" alt="Babylon" height="250"></p>
<p align="center">This package provides a moderately customizable (more in the works!!), lightweight, modern React functional component tabbed container. I found myself building this element often enough to create a package out of it.</p>


## PREQREQUISITES:
- React environment
- package.json ->
    - ```{"type": "module"}```

> ## Installation ->

```npm i tabylonia --save```


> ## Import module

```import { Tabylon } from 'tabylonia'```


> ## Basic HTML Element

```<Tabylon />```

> ## Advance HTML Element with options

```
<Tabylon
    containerStyle={non null}
    tabBarStyle={non null}
    tabStyle={non null}
    activeComponentStyle={non null}
    data=[{non null}[]
/>
```



> ## OPTIONS
<h1 align="center">containerStyle = {}</h1>

| Name | PropType | Default value | Description |
| :--- | :------- | :------ | :---------- |
| bgcolor | string | rgba(0,0,0)| background color for element container |
| fcolor | sgtring | rgba(255,255,255)| initial font color for entire element |
| dcolor | string | rgba(255,255,255,.5)| initial text decoration color
```
containerStyle = {
        bgcolor: 'rgba(0,0,0)',
        fcolor: 'rgba(255,255,255)',
        dcolor: 'rgba(255,255,255,.5)'
    }
```

<h1 align="center">tabBarStyle = {}</h1>

| Name | PropType | Default value | Description |
| :--- | :------- | :------ | :---------- |
| height | string | '10vh'| starting height of tab bar |
| width | string | '10%'| starting width of tab bar |

```
tabBarStyle: {
        height: '10vh',
        width: '100%',
    }
```


<h1 align="center">tabStyle = {}</h1>

| Name | PropType | Default value | Description |
| :--- | :------- | :------ | :---------- |
| titleAlign | string | 'center' | alignment of tab title when not active |
| titleAlignActive | string | 'flex-start' | alignment of tab title when active |
| style | string | 'standard' | tab theme definer (not done) |
| grow | boolean | false | true: applies flex grow (tabs grow to take all availabe space when active), false: sets static witdth of tabs |
| bcolor | string | 'rgba(255, 255, 255, 0.5)'| non-active tab background color |
| acolor | string | 'rgba(255,255,255)'| active tab background color |

```
tabStyle = {
        titleAlign: 'center',
        titleAlignActive: 'flex-start',
        style: 'standard',
        grow: false,
        bcolor: 'rgba(255, 255, 255, 0.5)',
        acolor: 'rgba(255,255,255)',
    }
```


<h1 align="center">activeComponentStyle = {}</h1>

| Name | PropType | Default value | Description |
| :--- | :------- | :------ | :---------- |
| bgcolor | string | 'rgba(255,255,255)' | active panel background color (img/video capability coming next) |
| flexDirection | string | 'column' | flex direction |
| justifyContent | string | 'center' | horizontal align |
| alignItems | string | 'center' | vertical align |

```
activeComponentStyle = {
        bgcolor: 'rgba(255,255,255)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
```



<h1 align="center">data = []</h1>
<p align="center">This is where the magic happens. All of the tabs as well as the managment of the active container are run from the data object. The reason I designed it this way was to give the developer the greatest freedom in combination with the high iteration speed. By passing an array of specifically crafted data objects, perhaps collated from database call or API hits, all UI management is taken care of without adding a confusing tree of HTML elements. Following are two examples of how to pass data to the active component as it stands.</p>

__Each constituent object of the data array must have at least two named properties, name and data. Name is the tab name and data is the active panel content.__
``` 
Basic data passing, the string 'content ${num}' will show up in the active container panel.
data = [
    {name: 'one', data: 'content one'},
    {name: 'two', data: 'content two'},
    ... etc. 
    ]
```


``` 
Component passing, the component passed into the data property will show up in the active container panel.
data = [
    {name: 'Component Name', data: <Component One />},
    {name: 'Component Name', data: <Component One />},
    ... etc. 
    ]
```

<hr>

## Roadmap
See the [open issues](https://github.com/jazznerd206/tabylon/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the UnLicense. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

-   linkedIn: https://www.linkedin.com/in/andrew-miller-113a1a195/
-   Gertherb: [https://github.com/jazznerd206/tabylon](https://github.com/jazznerd206/tabylon)
