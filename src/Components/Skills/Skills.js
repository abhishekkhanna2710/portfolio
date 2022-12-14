import React from 'react'
import skillstyle from './Skill.module.css'

function Skills() {
return (
<div className={skillstyle.container} id="skill_page">
<div className={skillstyle.skills}>
<h1>My <span>Technical </span>Skills</h1>

<div className={skillstyle.mainbox}>

<div className={skillstyle.box}>
<img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" />
<p>Html</p>
</div>

<div className={skillstyle.box}>
<img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="" />
<p>CSS</p>
</div>
<div className={skillstyle.box}>
<img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
<p>JAVASCRIPT</p>
</div>
<div className={skillstyle.box}>
<img src="https://img.icons8.com/color/48/000000/react-native.png" alt="" />
<p>REACT</p>
</div>
<div className={skillstyle.box}>
<img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="" />
<p>GITHUB</p>
</div>
<div className={skillstyle.box}>
<img src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" alt="" />
<p>POSTMAN</p>
</div>
</div>
</div>
</div>
)
}

export default Skills