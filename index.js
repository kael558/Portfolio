let skills_list = {
	//1st
	Data: ["Collection", "Wrangling", "Exploratory Analysis", "Training"],
	"Software Engineering": ["Backend", "Frontend"],

	Backend: ["Database"],
	Frontend: ["React Native", "D3", "Streamlit"],

	//2nd
	Languages: [
		"Python",
		"C",
		"C++",
		"Java",
		"JavaScript",
		"SmallTalk",
		"Racket",
		"C#",
		"MATLAB",
		"SQL",
	],
	"DL frameworks": [
		"PyTorch",
		"Tensorflow",
		"Keras",
		"Fastai",
		"IceVision",
		"Deeplearning4j",
		"Cohere",
		"ZenML",
	],
	"DS libraries": [
		"sklearn",
		"scikit‑learn",
		"scipy",
		"statsmodels",
		"pingouin",
		"seaborn",
		"matplotlib",
		"pandas",
		"numpy",
		"Annoy",
	],
	"DL experiment tracking": ["Weights & Biases", "Vertex AI"],
	"DL deployment": ["Streamlit", "Hugging Face Spaces", "Gradio"],
	Database: [
		"Firebase",
		"MongoDB",
		"PostgreSQL",
		"MySQL",
		"SQLite",
		"BigQuery",
	],
	"Continuous Integration": ["TravisCI"],

	MLOps: ["ZenML"],
	Cloud: ["GCP", "AWS"],
	AWS: ["Cloudwatch", "S3", "Lambda", "SageMaker"],
	"ML Algorithms": [
		"Clustering",
		"Linear Regression",
		"Logistic Regression",
		"Decision Tree",
		"SVM",
		"Naive Bayes",
		"KNN",
		"Random Forest",
		"Dimensionality Reduction",
		"Boosting",
	],

	//3rd
	"Dimensionality Reduction": ["PCA", "TruncatedSVD"],
	Boosting: ["AdaBoost", "Gradient Boost"],
	Clustering: ["Hierarchical Clustering", "K-Means"],
};

const project_title = document.getElementById("project-title");
const people_div = document.getElementById("people-div");
const people = document.getElementById("people");
const glossary_div = document.getElementById("glossary-div");
const glossary = document.getElementById("glossary");
const problem_statement_div = document.getElementById("problem-statement-div");
const problem_statement = document.getElementById("problem-statement");
const implementation_div = document.getElementById("implementation-div");
const implementation = document.getElementById("implementation");
const skills_div = document.getElementById("skills-div");
const skills = document.getElementById("skills");
const links_div = document.getElementById("links-div");
const links = document.getElementById("links");

function clear_project_page() {
	people.innerHTML = "";
	glossary.innerHTML = "";
	problem_statement.innerHTML = "";
	implementation.innerHTML = "";
	skills.innerHTML = "";
	links.innerHTML = "";

	people_div.style.display = "none";
	glossary_div.style.display = "none";
	problem_statement_div.style.display = "none";
	implementation_div.style.display = "none";
	skills_div.style.display = "none";
	links_div.style.display = "none";
}
var converter = new showdown.Converter();

class Project {
	constructor(img, title, short_desc, md_file) {
		this.img = img;
		this.title = title;
		this.short_desc = short_desc;
		this.md_file;
	}

	render_page() {
		console.log("render page");
		fetch(
			"https://raw.githubusercontent.com/kael558/Portfolia/main/markdown/visualizing_diversity.md"
		)
			.then((response) => response.text())
			.then((text) => {
				project_page.innerHTML = "";
				const htmlContent = document.createElement("div");
				htmlContent.innerHTML = converter.makeHtml(text);
				project_page.appendChild(htmlContent);

				// do something with the HTML, such as adding it to the DOM
			});
		/*clear_project_page();



		project_title.innerText = this.title;
		if (this.people) {
			people_div.style.display = "block";
			for (let person of this.people) {
				let li = document.createElement("li");
				li.innerText = person;
				people.appendChild(li);
			}
		}

		if (this.glossary) {
			glossary_div.style.display = "block";
			for (let definition of this.glossary) {
				let li = document.createElement("li");
				li.innerText = definition;
				people.appendChild(li);
			}
		}

		if (this.problem_statement) {
			problem_statement_div.style.display = "block";
			for (let element of this.problem_statement) {
				if (element.type == "image") {
					let img = document.createElement("img");
					img.src = element.image;
					problem_statement.appendChild(img);
				} else if (element.type == "text") {
					let txt = document.createElement("p");
					txt.innerText = element.text;
					problem_statement.appendChild(txt);
				}
			}
		}

		if (this.implementation) {
			implementation_div.style.display = "block";
			for (let element of this.implementation) {
				if (element.type == "image") {
					let img = document.createElement("img");
					img.src = element.image;
					implementation.appendChild(img);
				} else if (element.type == "text") {
					let txt = document.createElement("p");
					txt.innerText = element.text;
					implementation.appendChild(txt);
				}
			}
		}

		if (this.skills) {
			skills_div.style.display = "block";
			skills.innerText = this.skills;
		}

		if (this.links) {
			links_div.style.display = "block";
			for (let link of this.links) {
				if (link.type == "link") {
					var a = document.createElement("a");
					var linkText = document.createTextNode(link.name);
					a.appendChild(linkText);
					a.title = link.name;
					a.href = link.link;

					let li = document.createElement("li");
					li.appendChild(a);

					links.appendChild(li);
				} else if (link.type == "paper") {
					var a = document.createElement("a");
					var linkText = document.createTextNode(link.name);
					a.appendChild(linkText);
					a.title = link.name;
					a.href = link.link;
					a.download = link.name;

					let li = document.createElement("li");
					li.appendChild(a);

					links.appendChild(li);
				}
			}
		}*/
	}
}

let projects = [];

projects.push(
	new Project(
		"images/visualizing_diversity/edi.png",
		"Visualizing Diversity in Data",
		"Utilized D3 and JavaScript to create advanced visualizations of complex data, showcasing the intricacies of diversity while meeting project requirements and deadlines.",
		"images/visualizing_diversity/project.md"
		/*["Fateme Rajabiyazdi", "Subrahmanyam Gananatha"],
		null,
		[
			{
				type: "text",
				text: "This project was developed under the I-CUREUS research grant",
			},
			{
				type: "text",
				text: "Tracking diversity statistics can help universities identify areas where they may need to improve in terms of recruiting, admitting, and retaining diverse students. Having proper tools to understand the data can assist Universities as they work to effect policy changes in relation to diversity, equity and inclusion.",
			},
			{ type: "image", image: "images/visualizing_diversity/table.png" },
			{
				type: "text",
				text: "The Carleton Original Data Cubes (CODC) contain information about the demographics of students. The diversity statistics include student counts by sex, age, and citizenship status. These may be compared against categories, including degrees, departments, STEM vs non-STEM, academic years, study status and/or the majors of students. Visualizing this data could reveal patterns, trends or anomalies.",
			},
			{
				type: "text",
				text: "The primary goal was to design an interactive visualization on a web-based platform. It allows graphical comparison of student diversity in various academic categories. The secondary goal was to show the lack of demographic diversity data collected by the University. ",
			},
		],
		[
			{ type: "image", image: "images/visualizing_diversity/low_fidelity.png" },
			{
				type: "text",
				text: "In phase one, I created low to medium-fidelity visualizations and collaborated with an EDI research specialist to discuss missing attributes and improve designs. Finally, I cleaned the CODC data using Python.",
			},
			{
				type: "text",
				text: "For the complete Design Rationale, see the GitHub Repository Readme.",
			},

			{ type: "image", image: "images/visualizing_diversity/development.png" },
			{
				type: "text",
				text: "In phase two, I implemented the designs using an interactive web-based platform and the d3 library.",
			},
			{
				type: "text",
				text: "We communicated with the Carleton Institutional Research & Planning Team about potential issues with the dataset, contributing to a complete system overhaul. We presented our project to them and suggested important demographic categories to collect. ",
			},
			{
				type: "text",
				text: "We also wrote a paper detailing our project, for the Visualizing for Social Good workshop.  Despite not being accepted, I gained valuable feedback for future paper submissions.",
			},
		],
		"HTML, JavaScript, CSS, D3, Data wrangling, Requirements, Tableau",
		[
			{
				type: "link",
				name: "Project Page",
				link: "https://kael558.github.io/EDIProjectPage/",
			},
			{
				type: "link",
				name: "Visualization",
				link: "https://kael558.github.io/symmetrical-dollop/",
			},
			{
				type: "link",
				name: "Repository",
				link: "https://github.com/kael558/symmetrical-dollop",
			},
			{
				type: "paper",
				name: "Paper",
				link: "images/visualizing_diversity/EDI_Visualization_Design.pdf",
			},
		]*/
	)
);
/*
projects.push(
	new Project(
		"Research Paper Semantic Search and Clustering",
		"Developed a tool for semantic search and clustering of research papers that is adaptable to various data sets and can handle large volumes, resulting in significant time savings for research",
		"Won 1st place in AI Transformers Hackathon with over 1000 participants. Developed a tool for semantic search and clustering of research papers that is adaptable to various data sets and can handle large volumes, resulting in significant time savings for research.",
		"Python, Cohere's Transformers, Hierarchical Clustering, Streamlit, Annoy",
		"images/semantic_search.png",
		{
			Link: "https://kael558-redesigned-spoon-ui-em33xz.streamlit.app/",
			Repo: "https://github.com/kael558/redesigned-spoon",
		}
	)
);

projects.push(
	new Project(
		"Stable Diffusion Creator Tool",
		"Created an interface that integrated Stable Diffusion models, allowing users to efficiently create videos with interpolation from specific images and prompts ",
		"Won 1st place in Stable Diffusion Hackathon with over 700 participants. Implemented an interface with Stable Diffusion models to enhance user efficiency in creating videos from specific images and prompts.",
		"Python, Stable Diffusion, API, Hugging Face Spaces, Gradio, Flask, HTML, JavaScript, d3, ffmpeg",
		"images/stablediffusion.png",
		{
			Link: "https://kael558.github.io/supreme-octo-tribble/",
			Repo: "https://github.com/kael558/supreme-octo-tribble",
		}
	)
);

			<div
							style="
								background-image: url('images/edi.png');
								width: 380px;
								height: 380px;
								background-repeat: no-repeat;
								background-size: contain;
								background-position: center;
							"
						></div>
*/

let project_divs = d3
	.select("#projects-truncated")
	.selectAll("div")
	.data(projects)
	.enter()
	.append("div")
	.classed("col-3", true)
	.on("click", function (e, d) {
		navigate("project", d);
		return false;
	});

project_divs
	.append("p")
	.classed("project-title", true)
	.text((d) => d.title);

project_divs
	.append("img")
	.attr("src", (d) => d.img)
	.style("width", "100%")
	.style("height", "170px")
	.style("border", "0px")
	.style("border-radius", "5px");

project_divs
	.append("p")
	.classed("project-desc", true)
	.text((d) => d.short_desc);

let home_button = document.getElementById("home-button");
let projects_button = document.getElementById("projects-button");
let see_projects_link = document.getElementById("see-projects");

let blog_button = document.getElementById("blog-button");
let publications_button = document.getElementById("publications-button");

let home_page = document.getElementById("home-page");
let projects_page = document.getElementById("projects-page");
let blog_page = document.getElementById("blog-page");
let publications_page = document.getElementById("publications-page");
let project_page = document.getElementById("project-page");

home_button.onclick = () => navigate("home");
projects_button.onclick = () => navigate("projects");
see_projects_link.onclick = () => navigate("projects");
blog_button.onclick = () => navigate("blog");
publications_button.onclick = () => navigate("publications");

function navigate(page, project) {
	home_button.classList.remove("active");
	projects_button.classList.remove("active");
	blog_button.classList.remove("active");
	publications_button.classList.remove("active");

	if (page == "home") {
		home_page.style.display = "flex";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		project_page.style.display = "none";
		home_button.classList.add("active");
	} else if (page == "projects") {
		console.log("show projects");
		home_page.style.display = "none";
		projects_page.style.display = "block";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		project_page.style.display = "none";
		projects_button.classList.add("active");
	} else if (page == "blog") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "block";
		publications_page.style.display = "none";
		project_page.style.display = "none";
		blog_button.classList.add("active");
	} else if (page == "publications") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "block";
		project_page.style.display = "none";
		publications_button.classList.add("active");
	} else if (page == "project") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		project_page.style.display = "block";
		project.render_page();
	}

	return false;
}

navigate("home");

function render_project(project) {}
