import React from "react";
import moxios from "moxios";
import Search from ".";

moxios.install();

// stubRequest for query "elon"
moxios.stubRequest(
	"https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=50",
	{
		status: 200,
		response: [
			"elon",
			[
				"Elon",
				"Elon Musk",
				"Elon Musk's Tesla Roadster",
				"Elon University",
				"Elongated Man",
				"Elon Phoenix men's soccer",
				"Elon University School of Law",
				"Elonka Dunin",
				"Elongated coin",
				"Elon Hogsett",
				"Elongation factor",
				"Elongated tortoise",
				"Elongatoolithus",
				"Eloni Vunakece",
				"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
				"Elonex ONE",
				"Elonis v. United States",
				"Elon Musk in popular culture",
				"Elon Ganor",
				"Elon Phoenix football",
				"Elonex ONEt",
				"Elongated triangular tiling",
				"Elona (video game)",
				"Elon Phoenix",
				"Elon, North Carolina",
				"Elonkerjuu",
				"Elongation factor 2 kinase",
				"Elon Gold",
				"Elon Phoenix men's basketball statistical leaders",
				"Elon Moreh",
				"Elonzo",
				"Elongation (astronomy)",
				"Elon Lages Lima",
				"Elongated square gyrobicupola",
				"Elon Lindenstrauss",
				"Elongatoolithidae",
				"Elongate surgeonfish",
				"Elongation factor P",
				"Elon Phoenix men's basketball",
				"Elongated labia",
				"Elon Galusha",
				"Elon Phoenix women's basketball",
				"Elongated soft palate",
				"Elon Huntington Hooker",
				"Elongate smooth-head",
				"Elongated gyrobifastigium",
				"Elongation factor for RNA polymerase II 2",
				"Elongated square bipyramid",
				"Elongator complex protein 5",
				"Elon James White",
			],
			[
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
			],
			[
				"https://en.wikipedia.org/wiki/Elon",
				"https://en.wikipedia.org/wiki/Elon_Musk",
				"https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
				"https://en.wikipedia.org/wiki/Elon_University",
				"https://en.wikipedia.org/wiki/Elongated_Man",
				"https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_soccer",
				"https://en.wikipedia.org/wiki/Elon_University_School_of_Law",
				"https://en.wikipedia.org/wiki/Elonka_Dunin",
				"https://en.wikipedia.org/wiki/Elongated_coin",
				"https://en.wikipedia.org/wiki/Elon_Hogsett",
				"https://en.wikipedia.org/wiki/Elongation_factor",
				"https://en.wikipedia.org/wiki/Elongated_tortoise",
				"https://en.wikipedia.org/wiki/Elongatoolithus",
				"https://en.wikipedia.org/wiki/Eloni_Vunakece",
				"https://en.wikipedia.org/wiki/Elon_Musk:_Tesla,_SpaceX,_and_the_Quest_for_a_Fantastic_Future",
				"https://en.wikipedia.org/wiki/Elonex_ONE",
				"https://en.wikipedia.org/wiki/Elonis_v._United_States",
				"https://en.wikipedia.org/wiki/Elon_Musk_in_popular_culture",
				"https://en.wikipedia.org/wiki/Elon_Ganor",
				"https://en.wikipedia.org/wiki/Elon_Phoenix_football",
				"https://en.wikipedia.org/wiki/Elonex_ONEt",
				"https://en.wikipedia.org/wiki/Elongated_triangular_tiling",
				"https://en.wikipedia.org/wiki/Elona_(video_game)",
				"https://en.wikipedia.org/wiki/Elon_Phoenix",
				"https://en.wikipedia.org/wiki/Elon,_North_Carolina",
				"https://en.wikipedia.org/wiki/Elonkerjuu",
				"https://en.wikipedia.org/wiki/Elongation_factor_2_kinase",
				"https://en.wikipedia.org/wiki/Elon_Gold",
				"https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_basketball_statistical_leaders",
				"https://en.wikipedia.org/wiki/Elon_Moreh",
				"https://en.wikipedia.org/wiki/Elonzo",
				"https://en.wikipedia.org/wiki/Elongation_(astronomy)",
				"https://en.wikipedia.org/wiki/Elon_Lages_Lima",
				"https://en.wikipedia.org/wiki/Elongated_square_gyrobicupola",
				"https://en.wikipedia.org/wiki/Elon_Lindenstrauss",
				"https://en.wikipedia.org/wiki/Elongatoolithidae",
				"https://en.wikipedia.org/wiki/Elongate_surgeonfish",
				"https://en.wikipedia.org/wiki/Elongation_factor_P",
				"https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_basketball",
				"https://en.wikipedia.org/wiki/Elongated_labia",
				"https://en.wikipedia.org/wiki/Elon_Galusha",
				"https://en.wikipedia.org/wiki/Elon_Phoenix_women%27s_basketball",
				"https://en.wikipedia.org/wiki/Elongated_soft_palate",
				"https://en.wikipedia.org/wiki/Elon_Huntington_Hooker",
				"https://en.wikipedia.org/wiki/Elongate_smooth-head",
				"https://en.wikipedia.org/wiki/Elongated_gyrobifastigium",
				"https://en.wikipedia.org/wiki/Elongation_factor_for_RNA_polymerase_II_2",
				"https://en.wikipedia.org/wiki/Elongated_square_bipyramid",
				"https://en.wikipedia.org/wiki/Elongator_complex_protein_5",
				"https://en.wikipedia.org/wiki/Elon_James_White",
			],
		],
	}
);

// stubRequets for empty data query "asdfsdfkjsdf"
moxios.stubRequest(
	"https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=asdfsdfkjsdf&limit=50",
	{
		status: 200,
		response: ["asdfsdfkjsdf", [], [], []],
	}
);

export default {
	title: "Pages/Search",
	component: Search,
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	location: {
		search: "?query=elon",
	},
};

export const EmptyData = Template.bind({});
EmptyData.args = {
	location: {
		search: "?query=asdfsdfkjsdf",
	},
};
