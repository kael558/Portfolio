const skill_to_tech_map = {
	"Hypothesis Testing": ["pingouin", "statsmodels", "scipy"],
	Deployment: ["Streamlit", "Hugging Face Spaces", "Gradio", "FastAPI"],

	"Mobile App Development": [
		"Expo Go",
		"React Native",
		"MongoDB",
		"TypeScript",
		"Android Studio",
	],
	Prototyping: ["Figma"],

	Agile: ["Jira", "Git"],
	API: ["requests", "CRUDRepository"],
	"Web Scraping": ["requests"],
	"Web Crawling": ["Scrapy"],
	"Template Engine": ["Thymeleaf", "Pug"],
	"Data Wrangling": [
		"Pandas",
		"NumPy",
		"Google DataPrep",
		"DataWrangler",
		"OpenRefine",
		"Excel",
		"GDAL",
	],
	"Exploratory Data Analysis": [
		"Jupyter Notebooks",
		"Pandas",
		"NumPy",
		"Seaborn",
		"Python",
		"Tableau",
	],
	Visualization: ["D3", "Matplotlib", "Seaborn", "Tableau"],
	"Web Frameworks": ["Spring Boot", "Django", "Flask"],
	"Full Stack Languages": ["JavaScript", "HTML", "CSS", "Python"],
	"Backend Languages": ["Python", "Java"],
	"Frontend Languages": ["TypeScript", "JavaScript", "HTML", "CSS"],
	"Version Control": ["Git"],
	"JS Frameworks": ["NodeJS", "ReactJS", "ExpressJS"],
	"Responsive Design": ["Bootstrap", "jQuery"],
	"Web Hosting": ["Github Pages", "Heroku"],
	"Multi-threading": ["Akka"],
	"Algorithms & Data Structures": [],
	"DL Frameworks": [
		"PyTorch",
		"TensorFlow",
		"Keras",
		"Fastai",
		"IceVision",
		"Deeplearning4j",
	],

	"DL experiment tracking": ["Weights & Biases", "Vertex AI"],
	MLOps: ["ZenML"],

	"CI/CD": ["TravisCI", "CircleCI", "Jenkins", "GitHub Actions"],
	Containers: ["Docker"],
	"Monitoring Tools": ["Hystrix"],

	noSQL: ["MongoDB", "Firebase"],
	SQL: ["PostgreSQL", "MySQL", "SQLite", "BigQuery"],

	Cloud: ["AWS", "GCP", "Azure"],

	AWS: ["Cloudwatch", "S3", "Lambda", "SageMaker"],
	GCP: ["BigQuery", "Vertex AI", "Container", "Google Places API"],

	CNN: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	RNN: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	LSTM: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	GAN: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	AE: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	Transformer: ["Deeplearning4j", "PyTorch", "TensorFlow"],
	DBN: ["Deeplearning4j", "PyTorch", "TensorFlow"],

	Bagging: ["Scikit-learn"],
	"Linear Regression": ["Scikit-learn", "statsmodels"],
	"Logistic Regression": ["Scikit-learn"],
	SVM: ["Scikit-learn"],
	"Naive Bayes": ["Scikit-learn"],
	"Decision Tree": ["Scikit-learn"],
	KNN: ["Scikit-learn"],
	"Random Forest": ["Scikit-learn"],
	PCA: ["Scikit-learn"],
	TruncatedSVD: ["Scikit-learn"],
	UMAP: ["umap"],
	NMF: ["Scikit-learn"],
	"t-SNE": ["Scikit-learn"],
	"Hierarchical Clustering": ["Scikit-learn"],
	"K-Means": ["Scikit-learn"],
	AdaBoost: ["Scikit-learn"],
	"Gradient Boost": ["Scikit-learn"],
	"Stochastic Gradient Boosting": ["Scikit-learn"],

	Video: ["FFmpeg"],

	OCR: ["Tesseract"],
	"Image Classification": ["PyTorch"],
	"Object Detection": ["GLIPv2"],
	"Zero-shot Model": ["GLIPv2"],
	Segmentation: ["PyTorch"],

	"Vector Database": ["Annoy", "Pinecone", "FAISS"],
	"TF-IDF": ["nltk"],
	Embeddings: ["Cohere", "OpenAI", "AI21"],
	Classification: ["Cohere", "OpenAI", "AI21"],
	Generation: ["Cohere", "OpenAI", "AI21"],
	"Stable Diffusion": ["Runway", "Stable Diffusion"],
	Annotation: ["Label Studio"],
	Testing: ["Selenium", "junit"],

	"Value-Based": ["SARSA", "Q-Learning", "Actor-Critic"],
	"Policy-Based": ["Policy Gradient", "Actor-Critic"],

	SARSA: ["OpenAI Gym", "TensorFlow", "RLTK", "PyTorch", "RLlib"],
	"Q-Learning": ["OpenAI Gym", "TensorFlow", "RLTK", "PyTorch", "RLlib"],
	"Policy Gradient": ["OpenAI Gym", "TensorFlow", "RLTK", "PyTorch", "RLlib"],
	"Actor-Critic": ["OpenAI Gym", "TensorFlow", "RLTK", "PyTorch", "RLlib"],
	Evolutionary: ["DEAP", "PyGMO", "EvoRoPy", "NEAT-Python", "RLlib"],
	"Model-Based": ["OpenAI Gym", "TensorFlow", "RLLab", "RLlib"],

	"Monte Carlo Policy Evaluation": [
		"OpenAI Gym",
		"TensorFlow",
		"RLLab",
		"RLlib",
	],
	"Monte Carlo Control": ["OpenAI Gym", "TensorFlow", "RLLab", "RLlib"],
	"Temporal-Difference Monte Carlo": [
		"OpenAI Gym",
		"TensorFlow",
		"RLLab",
		"RLlib",
	],
	"Monte Carlo Tree Search": ["OpenAI Gym", "TensorFlow", "RLLab", "RLlib"],

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
		"VBA",
	],
};

const skills = {
	//0th
	None: ["Data Science", "Software Engineering", "Languages"],

	//1st
	"Data Science": [
		"NLP",
		"Computer Vision",
		"Data Collection",
		"Data Wrangling",
		"Exploratory Data Analysis",
		"Deep Learning",
		"Machine Learning",
		"Hypothesis Testing",
		"Deployment",
	],
	"Software Engineering": [
		"Backend",
		"Frontend",
		"Full Stack",
		"DevOps",
		"Agile",
		"Mobile App Development",
		"Prototyping",
		"Testing",
	], //https://www.browserstack.com/guide/what-are-the-different-types-of-software-engineer-roles

	//2nd

	Skills: ["Multi-threading", "Algorithms & Data Structures"],
	NLP: ["LLM", "TF-IDF", "Vector Database", "Semantic Search"],
	"Computer Vision": [
		"Zero-shot Model",
		"Annotation",
		"OCR",
		"Image Classification",
		"Object Detection",
		"Segmentation",
		"Video",
		"Stable Diffusion",
	],
	"Data Collection": ["API", "Web Crawling", "Web Scraping"],

	"Machine Learning": [
		"MLOps",
		"ML Algorithms",
		"Deep Learning",
		"Reinforcement Learning",
		"Monte Carlo",
	], //Scikit-learn

	"Full Stack": [
		"Web Frameworks",
		"JS Frameworks",
		"Databases",
		"Full Stack Languages",
		"Version Control",
		"Web Hosting",
	],
	Backend: ["Databases", "Version Control", "Backend Languages", "Cloud"],
	Frontend: [
		"Responsive Design",
		"JS Frameworks",
		"Version Control",
		"Frontend Languages",
		"Template Engine",
	],
	DevOps: [
		"Version Control",
		"CI/CD",
		"Containers",
		"Monitoring Tools",
		"Cloud",
	],

	//3rd
	"Monte Carlo": [
		"Monte Carlo Policy Evaluation",
		"Monte Carlo Control",
		"Temporal-Difference Monte Carlo",
		"Monte Carlo Tree Search",
	],

	"Reinforcement Learning": [
		"Value-Based",
		"Policy-Based",
		"Model-Based",
		"Evolutionary",
	],

	"Deep Learning": ["DL Frameworks", "DL experiment tracking", "DL Models"],
	"Semantic Search": ["Embeddings", "Vector Database"],
	LLM: ["Embeddings", "Classification", "Generation"],
	Databases: ["noSQL", "SQL"],

	"ML Algorithms": [
		"Linear Regression",
		"Logistic Regression",
		"Ensemble Learning",
		"Clustering",
		"SVM",
		"Naive Bayes",
		"Decision Tree",
		"KNN",
		"Dimensionality Reduction",
	],

	//4th
	"Value-Based": ["SARSA", "Q-Learning", "Actor-Critic"],
	"Policy-Based": ["Policy Gradient", "Actor-Critic"],

	"DL Models": ["CNN", "RNN", "LSTM", "GAN", "AE", "Transformer", "DBN"],
	"Ensemble Learning": ["Random Forest", "Boosting", "Bagging"],
	"Dimensionality Reduction": ["PCA", "TruncatedSVD", "UMAP", "t-SNE", "NMF"],
	Clustering: ["Hierarchical Clustering", "K-Means"],

	//5th
	Boosting: ["AdaBoost", "Gradient Boost", "Stochastic Gradient Boosting"],
};

var converter = new showdown.Converter();

const full_tech_set = new Set();

for (let tech_list of Object.values(skill_to_tech_map)) {
	for (let tech of tech_list) {
		full_tech_set.add(tech);
	}
}

const full_skill_set = new Set();
for (let skill of Object.keys(skill_to_tech_map)) full_skill_set.add(skill);

for (let skill of Object.keys(skills)) full_skill_set.add(skill);

const used_tech_set = new Set();

const used_skill_set = new Set();

console.log(get_parent_skills_from_tech("Python"));

function get_parent_skills_from_tech(start_tech) {
	let visited_set = new Set();

	for (const [parent_skill, child_techs] of Object.entries(skill_to_tech_map)) {
		if (child_techs.includes(start_tech)) {
			visited_set.add(parent_skill);
		}
	}

	let changed = true;
	while (changed) {
		changed = false;
		for (const [parent_skill, child_skills] of Object.entries(
			skill_to_tech_map
		)) {
			if (visited_set.has(parent_skill)) {
				continue;
			}

			for (const skill of visited_set) {
				if (child_skills.includes(skill)) {
					visited_set.add(parent_skill);
					changed = true;
				}
			}
		}
	}
	return visited_set;
}

function get_parent_skills_from_skill(start_skill) {
	let visited_set = new Set([start_skill]);
	let changed = true;
	while (changed) {
		changed = false;
		for (const [parent_skill, child_skills] of Object.entries(skills)) {
			if (visited_set.has(parent_skill)) {
				continue;
			}

			for (const skill of visited_set) {
				if (child_skills.includes(skill)) {
					visited_set.add(parent_skill);
					changed = true;
				}
			}
		}
	}
	return visited_set;
}

class Project {
	constructor(title, short_desc, skills, tech, img, md_file) {
		this.title = title;
		this.short_desc = short_desc;

		for (let skill of skills) {
			for (let parent_skill of get_parent_skills_from_skill(skill)) {
				used_skill_set.add(parent_skill);
			}

			if (!full_skill_set.has(skill)) {
				console.log("Error: skill does not exist: " + skill);
			}
		}

		for (let t of tech) {
			for (let parent_skill of get_parent_skills_from_tech(t)) {
				used_skill_set.add(parent_skill);
			}

			used_tech_set.add(t);
			if (!full_tech_set.has(t)) {
				console.log("Error: " + title + " tech does not exist: " + t);
			}
		}
		this.skills = new Set(skills);
		this.tech = new Set(tech);
		this.img = img;
		this.md_file = md_file;
	}

	render_page() {
		md_page_content.innerHTML = "Loading...";

		fetch(this.md_file)
			.then((response) => response.text())
			.then((text) => {
				md_page_content.innerHTML = "";
				const htmlContent = document.createElement("div");
				htmlContent.innerHTML = converter.makeHtml(text);
				md_page_content.appendChild(htmlContent);

				// do something with the HTML, such as adding it to the DOM
			})
			.catch((error) => {
				md_page_content.innerHTML =
					"Error loading content... This should never happen but it did. Please try again later.";
				console.error("There was an error!", error);
			});
	}
}

const projects = [];

projects.push(
	new Project(
		"Visualizing Diversity in Data",
		"Utilized D3 and JavaScript to create advanced visualizations of complex data, showcasing the intricacies of diversity while meeting project requirements and deadlines.",
		[
			"Visualization",
			"Frontend Languages",
			"Version Control",
			"Web Hosting",
			"Data Wrangling",
		],
		[
			"JavaScript",
			"HTML",
			"CSS",
			"Python",
			"Github Pages",
			"D3",
			"Git",
			"Tableau",
		],
		"images/visualizing_diversity/edi.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/visualizing_diversity.md"
	)
);

projects.push(
	new Project(
		"Research Paper Semantic Search and Clustering",
		"Developed a tool for semantic search and clustering of research papers that is adaptable to various data sets and can handle large volumes, resulting in significant time savings for research",
		["Hierarchical Clustering", "LLM", "NLP", "Vector Database", "Embeddings"],
		[
			"Python",
			"Cohere",
			"Streamlit",
			"Annoy",
			"nltk",
			"Git",
			"Pandas",
			"NumPy",
			"Scikit-learn",
			"umap",
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
			"API",
			"Stable Diffusion",
			"Web Hosting",
			"Visualization",
			"Frontend",
			"Video",
		],
		[
			"Python",
			"Hugging Face Spaces",
			"Gradio",
			"Flask",
			"HTML",
			"JavaScript",
			"D3",
			"FFmpeg",
			"Github Pages",
			"Git",
			"Runway",
			"Stable Diffusion",
		],
		"images/sd_tool/stablediffusion.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/sd_creator_tool.md"
	)
);

projects.push(
	new Project(
		"Automated Annotations with Zero-Shot",
		"Developed a tool to accelerate the data annotation process. Users may download images given a caption, predict annotations based on user input labels and verify them",
		["MLOps", "Zero-shot Model", "Object Detection", "Cloud", "API"],
		["Python", "ZenML", "GLIPv2", "AWS", "Git", "Label Studio"],
		"images/anno_zenml/interface.jpg",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/automating_anno.md"
	)
);

projects.push(
	new Project(
		"Web Indexer",
		"Developed a question answering tool that can be seamlessly integrated into any website. It provides a convenient way to search for information in a website and returns answers in a clear and comprehensible format, along with relevant sources.",
		["Web Crawling", "LLM", "Vector Database", "Generation", "Embeddings"],
		["Python", "Scrapy", "AI21", "Streamlit", "Annoy", "Git"],
		"images/web_indexer/image.png",
		"https://raw.githubusercontent.com/kael558/Portfolio/main/markdown/web_indexer.md"
	)
);

projects.push(
	new Project(
		"Automated Data Wrangling Pipeline",
		"Independently developed a data wrangling pipeline using VBA to eliminate error prone manual process",
		["Data Wrangling"],
		["VBA", "Excel"],
		"images/excel_vba/card.jpg",
		null
	)
);

projects.push(
	new Project(
		"Wilderness Survival App",
		"Created a mobile app that allows injured patients to track their vitals, addressing the challenge of collecting accurate and consistent medical data in high‑pressure scenarios",
		[
			"Frontend Languages",
			"noSQL",
			"JS Frameworks",
			"Version Control",
			"Agile",
			"Mobile App Development",
			"Prototyping",
		],
		[
			"Figma",
			"JavaScript",
			"TypeScript",
			"React Native",
			"Expo Go",
			"MongoDB",
			"Jira",
			"Git",
			"ReactJS",
			"NodeJS",
		],
		"images/wilderness_survival_app/card.png",
		null
	)
);

projects.push(
	new Project(
		"Shopify Marketplace Mirror",
		"Developed an e-commerce website that addresses the needs of individuals looking to sell their own products",
		[
			"Frontend Languages",
			"Web Frameworks",
			"SQL",
			"CI/CD",
			"Monitoring Tools",
			"Agile",
			"Version Control",
			"Template Engine",
			"Web Hosting",
			"Testing",
		],
		[
			"Java",
			"SQL",
			"Spring Boot",
			"SQLite",
			"TravisCI",
			"Heroku",
			"Git",
			"Hystrix",
			"Thymeleaf",
			"junit",
			"JavaScript",
			"HTML",
			"CSS",
		],
		"images/shopify/card.png",
		null
	)
);

projects.push(
	new Project(
		"Parkour Map",
		"Created a mobile social app, similar to Snapchat, catering to parkour enthusiasts",
		[
			"noSQL",
			"JS Frameworks",
			"Version Control",
			"Mobile App Development",
			"GCP",
			"Data Wrangling",
		],
		[
			"Java",
			"Android Studio",
			"GDAL",
			"Firebase",
			"Google Places API",
			"Git",
			"GCP",
		],
		"images/parkour_map/card.jpg",
		null
	)
);

projects.push(
	new Project(
		"MineSweeper Agent",
		"Developed a deep learning model that utilizes q‑learning reinforcement learning and Monte Carlo simulation to determine the optimal actions in MineSweeper",
		[
			"Multi-threading",
			"Deep Learning",
			"Algorithms & Data Structures",
			"Version Control",
			"CNN",
		],
		["Java", "Akka", "Deeplearning4j", "Selenium", "Git"],
		"images/minesweeper/card.png",
		null
	)
);

projects.push(
	new Project(
		"Data Collection",
		"Automated data scraping using AWS Lambda, S3 and CloudWatch events to improve accuracy and consistency of data",
		["Data Collection", "Web Scraping", "Cloud", "Version Control"],
		["Python", "AWS", "requests", "Git"],
		"images/data_collection/card.jpg",
		null
	)
);

projects.push(
	new Project(
		"Optical Character Recognizer",
		"Created a tool to help users easily extract text from images using OCR",
		["OCR", "Computer Vision", "Version Control"],
		["Java", "Tesseract", "Git"],
		"images/ocr/card.jpeg",
		null
	)
);

projects.push(
	new Project(
		"TicTacToe Agent",
		"Implemented a SARSA agent using iterative policy evaluation reinforcement learning and Monte Carlo simulation to choose optimal actions in TicTacToe",
		[
			"Monte Carlo Policy Evaluation",
			"Monte Carlo",
			"Reinforcement Learning",
			"Algorithms & Data Structures",
		],
		["Java", "Git"],
		"images/tictactoe/card.png",
		null
	)
);

projects.push(
	new Project(
		"Harvard CS50's Web Development Course with Python and Javascript",
		"Developed several projects with full stack tools and principles including database design, scalability, security, and user experience",
		[
			"Frontend Languages",
			"Web Frameworks",
			"SQL",
			"CI/CD",
			"Version Control",
			"Template Engine",
			"Web Hosting",
			"Testing",
		],
		[
			"Python",
			"JavaScript",
			"HTML",
			"CSS",
			"SQL",
			"Django",
			"Bootstrap",
			"jQuery",
			"SQLite",
			"PostgreSQL",
			"GDAL",
			"Selenium",
			"GitHub Actions",
		],
		"images/cs50_web/card.png",
		null
	)
);

projects.push(
	new Project(
		"DataCamp's Data Scientist with Python Course",
		"This course covers popular Python libraries for importing, cleaning, manipulating, and visualizing data. It uses real-world datasets to teach statistical and machine learning techniques necessary for hypothesis testing and building predictive models. ",
		[
			"Hypothesis Testing",
			"Machine Learning",
			"Data Wrangling",
			"Exploratory Data Analysis",
			"TF-IDF",
			"Data Science",
			"Statistics",
			"Visualization",
			"Linear Regression",
			"Logistic Regression",
			"Ensemble Learning",
			"Clustering",
			"SVM",
			"Decision Tree",
			"KNN",
			"Dimensionality Reduction",
			"K-Means",
			"Hierarchical Clustering",
		],
		[
			"Python",
			"Pandas",
			"NumPy",
			"Seaborn",
			"pingouin",
			"statsmodels",
			"scipy",
			"Scikit-learn",
		],
		"images/datacamp/card.png",
		null
	)
);

class Blog{
	constructor(title, short_desc,  img, md_file) {
		this.title = title;
		this.short_desc = short_desc;
		this.img = img;
		this.md_file = md_file;
	}

	render_page() {
		md_page_content.innerHTML = "Loading...";

		fetch(this.md_file)
			.then((response) => response.text())
			.then((text) => {
				md_page_content.innerHTML = "";
				const htmlContent = document.createElement("div");
				htmlContent.innerHTML = converter.makeHtml(text);
				md_page_content.appendChild(htmlContent);

				// do something with the HTML, such as adding it to the DOM
			})
			.catch((error) => {
				md_page_content.innerHTML =
					"Error loading content... This should never happen but it did. Please try again later.";
				console.error("There was an error!", error);
			});
	}


}

const blogs = [];
blogs.push(new Blog(
	"Generative AI Hackathon",
	"A record of how I won AI21 Lab's Hackathon.",
	"images/web_indexer/image.png",
	"https://raw.githubusercontent.com/kael558/Portfolio/main/blog/AI21_win.md"
));

function render_blog_highlights(){
	let blog_divs = d3
		.select("#blogs-truncated")
		.selectAll("div")
		.data(blogs.slice(0, 3))
		.enter()
		.append("div")
		.classed("col-3", true)
		.on("click", function (e, d) {
			navigate("blog", d);
			return false;
		});

	blog_divs
		.append("p")
		.classed("project-title", true)
		.text((d) => d.title);

	blog_divs
		.append("img")
		.attr("src", (d) => d.img)
		.style("width", "100%")
		.style("height", "170px")
		.style("border", "0px")
		.style("border-radius", "5px");

	blog_divs
		.append("p")
		.classed("project-desc", true)
		.text((d) => d.short_desc);
}

function render_project_highlights() {
	let project_divs = d3
		.select("#projects-truncated")
		.selectAll("div")
		.data(projects.slice(0, 3))
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

let navigation_buttons = document.getElementsByClassName("navigation");

function set_navigation_link_for_button(name, page) {
	let navigation_on_click = function () {
		for (let navigation_button of navigation_buttons) {
			if (navigation_button.classList.contains(name)) {
				navigation_button.classList.add("active");
			} else {
				navigation_button.classList.remove("active");
			}
		}

		navigate(page);
		return false;
	};

	let buttons = document.getElementsByClassName(name);
	for (let button of buttons) {
		button.onclick = navigation_on_click;
	}
}

set_navigation_link_for_button("home-button", "home");
set_navigation_link_for_button("projects-button", "projects");
set_navigation_link_for_button("blog-button", "blog");
set_navigation_link_for_button("publications-button", "publications");

let home_page = document.getElementById("home-page");
let projects_page = document.getElementById("projects-page");
let blog_page = document.getElementById("blog-page");
let publications_page = document.getElementById("publications-page");
let md_page = document.getElementById("md-page");
let md_page_content = document.getElementById("md-page-content");

let parent_skills = [];

let selected_skill_parent = null;
let selected_skill = "None";
let selected_tech = new Set(["All"]);

function intersect(a, b) {
	return new Set([...a].filter((x) => b.has(x)));
}

function get_filtered_projects(selected_skill, selected_tech) {
	let child_skills = get_all_child_skills_from_skill(selected_skill);

	let tech = get_tech_from_skill(selected_skill);

	if (!selected_tech.has("All")) {
		tech = intersect(selected_tech, tech);
	}

	//const isInSelectedTechSet = (p_tech) => tech.has(p_tech);
	//const isInSelectedSkillSet = (p_skill) => child_skills.has(p_skill);

	/*
	case 1: no skill selected, no tech select -> show all under skill and tech
	case 2: skill selected, no tech select -> show all under skill (disregard tech)
	case 3: no skill selected, tech selected -> show all under tech
	case 4: skill selected, tech selected -> show all under skill and tech
	*/

	let filtered_projects;
	if (selected_tech.has("All")) {
		// no tech selected

		if (selected_skill == "Languages") {
			//special case for languages
			filtered_projects = projects.filter(
				(p) =>
					intersect(p.tech, tech).size > 0 ||
					intersect(p.skills, child_skills).size > 0
			);
		} else {
			filtered_projects = projects.filter(
				// case 1 & 2
				(p) => intersect(p.skills, child_skills).size > 0
			);
		}
	} else {
		// tech selected

		if (selected_skill_parent == null) {
			//no skill selected
			filtered_projects = projects.filter(
				(p) => intersect(p.tech, tech).size > 0
			);
		} else {
			filtered_projects = projects.filter(
				(p) =>
					intersect(p.tech, tech).size > 0 ||
					intersect(p.skills, child_skills).size > 0
			);
		}
	}

	return filtered_projects;
}

document.getElementById("back").onclick = () => {
	selected_skill_parent = null;
	selected_skill = parent_skills.pop();
	render_projects_page();
};

function render_projects_page() {
	render_navigation();

	let filtered_projects = get_filtered_projects(selected_skill, selected_tech);

	render_projects(filtered_projects);
}

function get_all_child_skills_from_skill(selected_skill) {
	let current_skills = [selected_skill];
	let skill_set = new Set();

	while (current_skills.length > 0) {
		let skill = current_skills.shift();
		if (skill in skills) {
			current_skills = current_skills.concat(skills[skill]);
		}
		skill_set.add(skill);
	}
	skill_set.delete("None");
	return skill_set;
}

function get_tech_by_category(selected_skill) {
	const tech_by_category = new Object();
	let current_skills =
		selected_skill in skills ? skills[selected_skill] : [selected_skill];
	for (let skill of current_skills) {
		tech_by_category[skill] = get_tech_from_skill(skill);
	}
	return tech_by_category;
}

function get_tech_from_skill(selected_skill) {
	let current_skills = [selected_skill];
	let tech_set = new Set();

	while (current_skills.length > 0) {
		let skill = current_skills.shift();
		if (skill in skills) {
			current_skills = current_skills.concat(skills[skill]);
		} else {
			for (let tech of skill_to_tech_map[skill]) {
				tech_set.add(tech);
			}
		}
	}

	return tech_set;
}

function render_navigation() {
	document.getElementById("back").style.display =
		parent_skills.length == 0 ? "none" : "block";

	document.getElementById("navigation-table").innerHTML = "";

	document.getElementById("current-skill").innerText = selected_skill;

	let skill_cell_header = document.createElement("th");
	skill_cell_header.innerText = "Skills";

	let tech_cell_header = document.createElement("th");
	tech_cell_header.innerText = "Related Tech";

	let row_header = document.createElement("tr");
	row_header.appendChild(skill_cell_header);
	row_header.appendChild(tech_cell_header);

	let table = document.getElementById("navigation-table");
	table.appendChild(row_header);

	let tech_by_category = get_tech_by_category(
		selected_skill in skills ? selected_skill : selected_skill_parent
	);

	let current_skills =
		skills[selected_skill in skills ? selected_skill : selected_skill_parent];
	for (let skill of current_skills) {
		if (!used_skill_set.has(skill)) {
			continue;
		}

		const skill_cell = document.createElement("td");
		const skill_cell_button = document.createElement("button");

		skill_cell_button.classList.add("project-filter-button");
		if (selected_skill == skill) {
			skill_cell_button.classList.add("active");
		}
		skill_cell_button.innerText = skill;
		if (!used_skill_set.has(skill)) {
			skill_cell_button.classList.add("empty");
		} else {
			skill_cell_button.onclick = () => {
				if (selected_skill_parent == null && !(skill in skills)) {
					selected_skill_parent = selected_skill;
					selected_skill = skill;
				} else if (
					selected_skill_parent != null &&
					!(skill in skills) &&
					selected_skill != skill
				) {
					selected_skill = skill;
				} else if (selected_skill == skill) {
					selected_skill = selected_skill_parent;
					selected_skill_parent = null;
				} else {
					if (selected_skill_parent == null) {
						parent_skills.push(selected_skill);
					} else {
						parent_skills.push(selected_skill_parent);
						selected_skill_parent = null;
					}

					selected_skill = skill;
					selected_tech = new Set(["All"]);
				}

				render_projects_page();
				return false;
			};
		}

		skill_cell.appendChild(skill_cell_button);
		//console.log(used_skill_set);
		//console.log(used_tech_set);
		const tech_cell = document.createElement("td");
		for (let tech of tech_by_category[skill]) {
			if (!used_tech_set.has(tech)) {
				continue;
			}

			const button = document.createElement("button");
			button.innerText = tech;
			if (selected_tech.has(tech)) {
				button.classList.add("active");
			}
			button.classList.add("project-filter-button");
			if (!used_tech_set.has(tech)) {
				button.classList.add("empty");
			} else {
				button.onclick = () => {
					if (selected_tech.has("All")) {
						selected_tech.delete("All");
						selected_tech.add(tech);
					} else if (selected_tech.has(tech)) {
						selected_tech.delete(tech);
						if (selected_tech.size == 0) {
							selected_tech.add("All");
						}
					} else {
						selected_tech.add(tech);
					}
					render_projects_page();
				};
			}

			tech_cell.appendChild(button);
		}

		const row = document.createElement("tr");
		row.appendChild(skill_cell);
		row.appendChild(tech_cell);

		table.appendChild(row);
	}
}


function render_blogs(){
	d3.select("#blogs-list")
		.selectAll("div.row")
		.data(blogs, (d) => d.title)
		.join(
			(enter) => {
				let blog_group = enter
					.append("div")
					.classed("row", true)
					.on("click", function (e, d) {
						navigate("blog-page", d);
						return false;
					});

				blog_group
					.style("opacity", "0")
					.transition()
					.duration(250)
					.style("opacity", "1");

				blog_group
					.append("div")
					.style("width", "15%")
					.style("float", "left")
					.classed("project-img", true)
					.append("img")
					.attr("src", (d) => d.img)
					.attr("width", "100%")
					.style("max-height", "100px");

				let blog_text_divs = blog_group
					.append("div")
					.style("width", "83%")
					.style("float", "left")
					.style("padding-left", "2%");

					blog_text_divs
					.append("h4")
					.text((d) => d.title)
					.style("margin", "0px");

					blog_text_divs
					.append("p")
					.text((d) => d.short_desc)
					.style("margin", "0px");

				return blog_group;
			},

			(update) => {
				return update;
			},
			(exit) =>
				exit
					.transition()
					.duration(250)
					.style("transform", "scale(1, 0)")
					.style("opacity", 0)
					.remove()
		);
}

function render_projects(projects) {
	const t = d3.transition().duration(750);

	d3.select("#projects-list")
		.selectAll("div.row")
		.data(projects, (d) => d.title)
		.join(
			(enter) => {
				let project_group = enter
					.append("div")
					.classed("row", true)
					.on("click", function (e, d) {
						navigate("project", d);
						return false;
					});

				project_group
					.style("opacity", "0")
					.transition()
					.duration(250)
					.style("opacity", "1");

				project_group
					.append("div")
					.style("width", "15%")
					.style("float", "left")
					.classed("project-img", true)
					.append("img")
					.attr("src", (d) => d.img)
					.attr("width", "100%")
					.style("max-height", "100px");

				let project_text_divs = project_group
					.append("div")
					.style("width", "83%")
					.style("float", "left")
					.style("padding-left", "2%");

				project_text_divs
					.append("h4")
					.text((d) => d.title)
					.style("margin", "0px");

				project_text_divs
					.append("p")
					.text((d) => d.short_desc)
					.style("margin", "0px");

				return project_group;
			},

			(update) => {
				return update;
			},
			(exit) =>
				exit
					.transition()
					.duration(250)
					.style("transform", "scale(1, 0)")
					.style("opacity", 0)
					.remove()
		);
}

function navigate(page, entry) {
	console.log("Navigating to " + page);
	if (entry) {
		if (entry.md_file == null){
			alert("More information on this project will be available soon.");
			return;
		} 
		entry.render_page()
	} 

	if (page == "home") {
		home_page.style.display = "flex";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		md_page.style.display = "none";
	} else if (page == "projects") {
		home_page.style.display = "none";
		projects_page.style.display = "block";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		md_page.style.display = "none";
	} else if (page == "blog") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "block";
		publications_page.style.display = "none";
		md_page.style.display = "none";
	} else if (page == "publications") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "block";
		md_page.style.display = "none";
	} else if (page == "project") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		md_page.style.display = "block";
	} else if (page == "blog-page") {
		home_page.style.display = "none";
		projects_page.style.display = "none";
		blog_page.style.display = "none";
		publications_page.style.display = "none";
		md_page.style.display = "block";
	}

	return false;
}

render_project_highlights();
render_projects_page();
render_blogs();
render_blog_highlights()
navigate("home");
