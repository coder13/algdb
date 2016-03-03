module.exports = {
	"id": "pll",
	"name": "PLL",
	"image": "pll",

	"description": "\nPLL is the acronym for **Permutation of the Last Layer**. PLL is the last step of many speedsolving methods. In this step, the pieces on the top layer have already been oriented [OLL](/set/oll) so that the top face has all the same color, and they can now be moved into their solved positions. There are 21 PLLs (13 if you count mirrors and inverses as being the same) and each one is named after a letter. The same algorithm may not be the fastest for everyone, and shorter algorithms are not always faster than longer ones. PLL is a subgroup of [ZBLL](/set/zbll).",

	"cases": [{
		"name": "Aa",
		"cp": [1,2,0,3],
		"algs": [{
			"type": "*",
			"alg": "l' U R' D2 R U' R' D2 R2"
		}, {
			"type": "*",
			"alg": "x R' U R' D2 R U' R' D2 R2"
		}, {
			"type": "*",
			"alg": "R' F R' B2 R F' R' B2 R2"
		}, {
			"type": "*",
			"auf": "U",
			"alg": "x' R2 D2' R' U' R D2' R' U R'"
		}, {
			"type": "*",
			"auf": "U'",
			"alg": "R U R' F' r U R' U' r' F R2 U' R'"
		}]
	}, {
		"name": "Ab",
		"cp": [2,0,1,3],
		"algs": [{
			"type": "*",
			"alg": "l' R' D2 R U R' D2 R U' R x'"
		}, {
			"type": "*",
			"alg": "x R2' D2 R U R' D2 R U' R x'"
		}, {
			"type": "*",
			"auf": "U",
			"alg": "l U' R D2 R' U R D2 R2"
		}, {
			"type": "*",
			"auf": "U",
			"alg": "x' R U' R D2 R' U R D2 R2"
		}]
	}, {
		"name": "E",
		"cp": [1,0,3,2],
		"algs": [{
			"type": "*",
			"auf": "U",
			"alg": "x' R U' R' D R U R' D' R U R' D R U' R' D' x"
		}, {
			"type": "*",
			"alg": "R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2"
		}, {
			"type": "TH",
			"alg": "z U2' R2' F R U R' U' R U R' U' R U R' U' F' R2 U2'"
		}, {
			"type": "*",
			"alg": "y x' R U' R' D R U R' u2 R' U R D R' U' R x"
		}]
	}, {
		"name": "F",
		"cp": [0, 2, 1, 3],
		"ep": [2,1,0,3],
		"algs": [{
			"type": "TH",
			"auf": "U",
			"alg": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
		}, {
			"type": "TH",
			"auf": "U2",
			"alg": "R' U2 R' d' R' F' R2 U' R' U R' F R U' F"
		}, {
			"type": "TH",
			"alg": "R' U R U' R2 F' U' F U R F R' F' R2"
		}, {
			"type": "TH",
			"alg": "M' U2 L F' R U2 r' U r' R2 U2 R"
		}]
	}, {
		"name": "Ga",
		"algs": [{
			"type": "*",
			"alg": "R2 u R' U R' U' R u' R2 y' R' U R"
		}, {
			"type": "*",
			"alg": "R2 U R' U R' U' R U' R2 D U' R' U R D'"
		}, {
			"type": "*",
			"alg": "R2 u R' U R' U' R u' R2 F' U F"
		}, {
			"type": "*",
			"alg": "D' R2 U R' U R' U' R U' R2 U' D R' U R"
		}]
	}, {
		"name": "Gb",
		"algs": []
	}, {
		"name": "Gc",
		"algs": []
	}, {
		"name": "Gd",
		"algs": []
	}, {
		"name": "H",
		"algs": []
	}, {
		"name": "Ja",
		"algs": []
	}, {
		"name": "Jb",
		"algs": []
	}, {
		"name": "Na",
		"algs": []
	}, {
		"name": "Nb",
		"algs": []
	}, {
		"name": "Ra",
		"algs": []
	}, {
		"name": "Rb",
		"algs": []
	}, {
		"name": "T",
		"algs": []
	}, {
		"name": "Ua",
		"algs": []
	}, {
		"name": "Ub",
		"algs": []
	}, {
		"name": "V",
		"algs": []
	}, {
		"name": "Y",
		"algs": []
	}, {
		"name": "Z",
		"algs": []
	}]

}