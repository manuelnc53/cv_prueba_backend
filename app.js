const CURRICULUM = {
	"nacionalidadID":1,
    "provinciaID":1,
	"localidadID":1,
    "personaID":1,
	"nombre":"Manu",
	"apellido":"Platzi",
	"direccion":"Narnia 123",
	"cp":"5700",
	"email":"manu@platzi.com",
	"telefono":"0800-platzi",
	"genero":"I",
	"fechaNac":"2000-01-01",
	"web":"www.platzi.manu.com",
	"perfil":"Hola mi nombre es Manu, soy un miembro de AAP (Adictos Anonimos a Platzi). Espero sepan entender mi adiccion y aprenadar a quererme. PD: Platzi"
}

const ESTUDIOS = [
	{
	"curriculumID":1,
	"titulo":"Gobernado",
	"universidad":"La de mi novia",
	"lugar":"Donde no hayas mas mujeres",
	"fechaInicio":"2000-12-12",
	"fechaFin":"2005-01-12",
	"descripcion":"Tengo miedo de poner algo y que se enoje eia"
	},
	{
		"curriculumID":1,
		"titulo":"Gobernado",
		"universidad":"La de mi novia",
		"lugar":"Donde no hayas mas mujeres",
		"fechaInicio":"2000-12-12",
		"fechaFin":"2005-01-12",
		"descripcion":"Tengo miedo de poner algo y que se enoje eia"
	},
	{
		"curriculumID":1,
		"titulo":"Gobernado",
		"universidad":"La de mi novia",
		"lugar":"Donde no hayas mas mujeres",
		"fechaInicio":"2000-12-12",
		"fechaFin":"2005-01-12",
		"descripcion":"Tengo miedo de poner algo y que se enoje eia"
	}
]

const JOBS = [
	{
	"rubroID":1,
	"curriculumID":1,
	"titulo":"Jefe de Programación",
	"empresa":"IfElse",
	"empleador":"Gianni Lupi",
	"telefono":"2665038308",
	"email":"gianni@ifelse.com.ar",
	"lugar":"Colon 1099, San Luis",
	"fechaInicio":"2018-07-01",
	"fechaFin":null,
	"descripcion":"Me iba mejor cagando en pañales y la paga era mejor, pero los mates aca son muy ricos."
	},
	{
	"rubroID":1,
	"curriculumID":1,
	"titulo":"Jefe de Programación",
	"empresa":"IfElse",
	"empleador":"Gianni Lupi",
	"telefono":"2665038308",
	"email":"gianni@ifelse.com.ar",
	"lugar":"Colon 1099, San Luis",
	"fechaInicio":"2018-07-01",
	"fechaFin":null,
	"descripcion":"Me iba mejor cagando en pañales y la paga era mejor, pero los mates aca son muy ricos."
	},
	{
	"rubroID":1,
	"curriculumID":1,
	"titulo":"Jefe de Programación",
	"empresa":"IfElse",
	"empleador":"Gianni Lupi",
	"telefono":"2665038308",
	"email":"gianni@ifelse.com.ar",
	"lugar":"Colon 1099, San Luis",
	"fechaInicio":"2018-07-01",
	"fechaFin":null,
	"descripcion":"Me iba mejor cagando en pañales y la paga era mejor, pero los mates aca son muy ricos."
	}
]

const HABILIDADES = [
	{
	"curriculumID":1,
	"nombre":"Ser invisible",
	"nivel":"1",
	"order":1
	},
	{
	"curriculumID":1,
	"nombre":"Ser invisible",
	"nivel":"1",
	"order":1
	},
	{
	"curriculumID":1,
	"nombre":"Ser invisible",
	"nivel":"1",
	"order":1
	}
]

const IDIOMAS = [
	{
	"curriculumID":1,
	"nombre":"guarani",
	"nivel":"1",
	"order":2
	},
	{
	"curriculumID":1,
	"nombre":"guarani",
	"nivel":"1",
	"order":2
	},
	{
	"curriculumID":1,
	"nombre":"guarani",
	"nivel":"1",
	"order":2
	}
]


const CV_1_SECTION_ESTUDIOS = () =>{

	let data = ""
	ESTUDIOS.forEach((element)=>{
		data += `<article>
					<h2>${element.universidad}</h2>
					<p class="subDetails">${element.fechaInicio} <span>-</span> ${element.fechaFin}</p>
					<p>${element.descripcion}</p>
				</article>`
	})

	return `<section>
			<div class="sectionTitle">
				<h1>Estudios</h1>
			</div>
			<div class="sectionContent">
				${data}
			</div>
			<div class="clear"></div>
		</section>`
}
const CV_1_SECTION_JOBS = () =>{

	let data = ""
	JOBS.forEach((element)=>{
		data += `<article>
					<h2>${element.empresa}</h2>
					<p class="subDetails">${element.titulo}</p>
					<p>${element.descripcion}</p>
				</article>`
	})

	return `<section>
			<div class="sectionTitle">
				<h1>Experiencia laboral</h1>
			</div>
			<div class="sectionContent">
				${data}
			</div>
			<div class="clear"></div>
		</section>`
}
const CV_1_SECTION_PERSONA = () =>{
	return `
	<div class="mainDetails">
		<div id="headshot" >
			<img src="http://agencia-fotografia.com/wp-content/uploads/2013/09/Fotografo-para-CV-8.jpg" alt="Alan Smith" />
		</div>
		
		<div id="name">
			<h1 >${CURRICULUM.nombre}</h1>
			<!--<h2 >Job Title</h2>-->
		</div>
		
		<div id="contactDetails" >
			<ul>
				<li><a href="mailto:${CURRICULUM.email}" target="_blank">${CURRICULUM.email}</a></li>
				<li><a href="${CURRICULUM.web}" target="_blank">${CURRICULUM.web}</a></li>
				<li> ${CURRICULUM.telefono}</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	`
}
const CV_1_SECTION_HABILIDADES = () =>{

	let data = ""
	HABILIDADES.forEach((element)=>{
		data += `<li>${element.nombre}</li>`
	})

	return `<section>
			<div class="sectionTitle">
				<h1>Habilidades</h1>
			</div>
			<div class="sectionContent">
				<ul class="keySkills">
					${data}
				</ul>
			</div>
			<div class="clear"></div>
		</section>`
}
const CV_1_SECTION_IDIOMAS = () =>{

	let data = ""
	IDIOMAS.forEach((element)=>{
		data += `<li>${element.nombre}</li>`
	})

	return `<section>
			<div class="sectionTitle">
				<h1>Idiomas</h1>
			</div>
			<div class="sectionContent">
				<ul class="keySkills">
					${data}
				</ul>
			</div>
			<div class="clear"></div>
		</section>`
}

const CV_1_SECTION_PERFIL = () =>{
	return `
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Perfil</h1>
				</div>
				
				<div class="sectionContent">
					<p>${CURRICULUM.perfil}</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
	` 
}
const CSS = () =>{
	return `
	html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
		border:0;
		font:inherit;
		font-size:100%;
		margin:0;
		padding:0;
		vertical-align:baseline;
	}

	article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
		display:block;
	}

	html, body {
		background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;
		}

	.clear {clear: both;}

	p {
		font-size: 1em;
		line-height: 1.4em;
		margin-bottom: 20px;
		color: #444;
	}

	#cv {
		width: 100%;
		background: #f3f3f3;
		
	}

	.mainDetails {
		padding: 25px 35px;
		border-bottom: 2px solid #cf8a05;
		background: #ededed;
	}

	#name h1 {
		font-size: 2.5em;
		font-weight: 700;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		margin-bottom: -6px;
	}

	#name h2 {
		font-size: 2em;
		margin-left: 2px;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	}

	#mainArea {
		padding: 0 40px;
	}

	#headshot {
		width: 12.5%;
		float: left;
		margin-right: 30px;
	}

	#headshot img {
		width: 100%;
		height: auto;
		-webkit-border-radius: 50px;
		border-radius: 50px;
	}

	#name {
		float: left;
	}

	#contactDetails {
		float: right;
	}

	#contactDetails ul {
		list-style-type: none;
		font-size: 0.9em;
		margin-top: 2px;
	}

	#contactDetails ul li {
		margin-bottom: 3px;
		color: #444;
	}

	#contactDetails ul li a, a[href^=tel] {
		color: #444; 
		text-decoration: none;
		
	}

	#contactDetails ul li a:hover { 
		color: #cf8a05;
	}


	section {
		border-top: 1px solid #dedede;
		padding: 20px 0 0;
	}

	section:first-child {
		border-top: 0;
	}

	section:last-child {
		padding: 20px 0 10px;
	}

	.sectionTitle {
		float: left;
		width: 25%;
	}

	.sectionContent {
		float: right;
		width: 72.5%;
	}

	.sectionTitle h1 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-style: italic;
		font-size: 1.5em;
		color: #cf8a05;
	}

	.sectionContent h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.5em;
		margin-bottom: -2px;
	}

	.subDetails {
		font-size: 0.8em;
		font-style: italic;
		margin-bottom: 3px;
	}

	.keySkills {
		list-style-type: none;
		-moz-column-count:3;
		-webkit-column-count:3;
		column-count:3;
		margin-bottom: 20px;
		font-size: 1em;
		color: #444;
	}

	.keySkills ul li {
		margin-bottom: 3px;
	}
	`
}

const CV_1 = () =>{
	return `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width"/>
<meta charset="UTF-8"> 
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
<style type="text/css">
	
	${CSS()}
</style>

</head>
<body id="top">
<div id="cv" >
	${CV_1_SECTION_PERSONA()}
	
	<div id="mainArea" >
		
		${CV_1_SECTION_PERFIL()}
		
		${CV_1_SECTION_JOBS()}
		
		${CV_1_SECTION_IDIOMAS()}

		${CV_1_SECTION_HABILIDADES()}
		
		${CV_1_SECTION_ESTUDIOS()}
		
	</div>
</div>

</body>
</html>`
}
var html_to_pdf = require('html-pdf-node');
 const fs = require('fs');
let options = { format: 'A4' };
let file = { content: CV_1()

 };

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
  console.log("PDF Buffer:-", pdfBuffer);

  fs.writeFile("CV.pdf", pdfBuffer,  "binary",function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
});