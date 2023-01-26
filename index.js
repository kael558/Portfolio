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

var converter = new showdown.Converter();

class Project {
	constructor(title, short_desc, skills, img, md_file) {
		this.title = title;
		this.short_desc = short_desc;
		this.skills = skills;
		this.img = img;
		this.md_file = md_file;
	}

	render_page() {
		project_page.innerHTML = "Loading...";

		fetch(this.md_file)
			.then((response) => response.text())
			.then((text) => {
				project_page.innerHTML = "";
				const htmlContent = document.createElement("div");
				htmlContent.innerHTML = converter.makeHtml(text);
				project_page.appendChild(htmlContent);

				// do something with the HTML, such as adding it to the DOM
			})
			.catch((error) => {
				project_page.innerHTML =
					"Error loading content... This should never happen but it did. Please try again later.";
				console.error("There was an error!", error);
			});
	}
}

let projects = [];

projects.push(
	new Project(
		"Visualizing Diversity in Data",
		"Utilized D3 and JavaScript to create advanced visualizations of complex data, showcasing the intricacies of diversity while meeting project requirements and deadlines.",
		[],
		"images/visualizing_diversity/edi.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/visualizing_diversity.md"
	)
);

projects.push(
	new Project(
		"Research Paper Semantic Search and Clustering",
		"Developed a tool for semantic search and clustering of research papers that is adaptable to various data sets and can handle large volumes, resulting in significant time savings for research",
		[
			"Python",
			"Cohere's Transformers",
			"Hierarchical Clustering",
			"Streamlit",
			"Annoy",
		],
		"images/rp_ss/semantic_search.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/semantic_searcher.md"
	)
);

projects.push(
	new Project(
		"Stable Diffusion Creator Tool",
		"Created an interface that integrated Stable Diffusion models, allowing users to efficiently create videos with interpolation from specific images and prompts ",
		[
			"Python",
			"Stable Diffusion",
			"API",
			"Hugging Face Spaces",
			"Gradio",
			"Flask",
			"HTML",
			"JavaScript",
			"d3",
			"ffmpeg",
		],
		"images/sd_tool/stablediffusion.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/sd_creator_tool.md"
	)
);

function render_project_highlights() {
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
}
render_project_highlights();

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

function render_projects() {
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
}

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
