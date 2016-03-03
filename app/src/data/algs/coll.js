module.exports = {
	id: "coll",
	name: "COLL",
	image: "coll",

	description: `
*COLL* is a subset of [C*LL](/set/cxll) that preserves edges.
CLL is best used for ZZ and petrus where preserving edges is a must and cfop for the off chance that edges are oriented.
	`,

	cube: {
		mask: 749055, // only show corners and LL edges
	},

	subsets: [{
		name: "T",
			co: [1, 0, 0, 2],

		description: `
Split this case into 3 sets of 2 cases. Split them up by looking at the top colors. They will either be opposite, adjacent or matching colors.
you'll then look a the back heaadlights. They will also either be the same, opposite or adjacent.
		`,

		cases: [{
			cp: [0, 1, 2, 3],

			comment: "Pure 2gen case. Recognize the top colors are matching and back colors are matching.",
			algs: [{
				type: "*",
				moveSet: "RU",
				auf: "U",
				alg: "R U2' R' U' R U' R2 U2' R U R' U R"
			}, {
				type: "*",
				moveSet: "RUL",
				alg: "R U R' U R U2 R' L' U' L U' L' U2 L"
			}]
		}, {
			cp: [1, 0, 2, 3],
			rotate: 'y2',

			algs: [{
				type: ["TH", "OP"],
				moveSet: "RUF",
				alg: "R' F' r U R U' r' F"
			}, {
				type: ["TH", "OP"],
				moveSet: "RUF",
				auf: "U2",
				alg: "F R F' r U R' U' r'"
			}, {
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "x' R U R' D R U' R' D'"
			}, {
				type: "*",
				moveSet: "RUL",
				auf: "U",
				alg: "R' U' R U L U' R' U x"
			}]
		}, {
			cp: [0, 1, 3, 2],

			algs: [{
				type: "*",
				moveSet: "RUF",
				alg: "r U R' U' r' F R F'"
			}, {
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "R U R D R' U' R D' R2"
			}, {
				type: "*",
				moveSet: "RUD",
				alg: "R U R' U' L' U R U' R' L"
			}]
		}, {
			cp: [0, 2, 1, 3],

			algs: [{
				type: "TH",
				moveSet: "RUF",
				auf: "U'",
				alg: "F R U R' U' R U' R' U' R U R' F'"
			}, {
				type: "*",
				moveSet: "RUF",
				auf: "U2",
				alg: "R U2 R' F2 R U2 R' U2 R' F2 R"
			}, {
				type: "*",
				moveSet: "RUD",
				alg: "x' R U2 R D2 R' U2 R D2 R2 x"
			}]
		}, {
			cp: [3, 1, 2, 0],

			algs: [{
				type: "*",
				moveSet: "RUL",
				auf: "U",
				alg: "R' U R U2' R' L' U R U' L"
			}, {
				type: "*",
				moveSet: "RUL",
				auf: "U'",
				alg: "R U' R' U2 L R U' R' U L'"
			}]
		}, {
			cp: [2, 1, 0, 3],

			comment: "diagonal swap case",
			algs: [{
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "R' U R2 D r' U2 r D' R2 U' R"
			}]
		}]
	}, {
		name: "U",
		co: [2, 0, 0, 1],

		description: `
		Split this case into 3 sets of 2 cases. Split them up by looking at the top colors. They will either be opposite, adjacent or matching colors.
		you'll then look a the back heaadlights. They will also either be the same, opposite or adjacent.
		`,

		cases: [{
			perm: 0,
			algs: [{
				type: "*",
				moveSet: "RU",
				auf: "U",
				alg: "R' U' R U' R' U2 R2 U R' U R U2 R'"
			}, {
				type: "*",
				moveSet: "RU",
				alg: "R U R' U' R U' R' U2 R U' R' U2 R U R'"
			}, {
				type: "*",
				moveSet: "RU",
				alg: "R' U' R U' R' U2 R2 U R' U R U2 R'"
			}]
		}, {
			perm: 1,
			algs: [{
				type: "*",
				moveSet: "RUD",
				auf: "U'",
				alg: "R2 D R' U2 R D' R' U2 R'"
			}, {
				type: "*",
				moveSet: "RUD",
				auf: "U'",
				alg: "x' R U' R' D R U2 R' D' R U' R' x"
			}]
		}, {
			perm: 2,
			algs: [{
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "R2 D' R U2 R' D R U2 R"
			}]
		}, {
			perm: 3,
			algs: [{
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "F R U' R' U R U R' U R U' R' F'"
			}, {
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "R' F2 R U2 R U2 R' F2 R U2 R'"
			}]
		}, {
			perm: 4,
			algs: [{
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"
			}, {
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "R' U' R F R2 D' R U R' D R2 U' F'"
			}]
		}, {
			perm: 5,
			algs: [{
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "R' U2 R F U' R' U' R U F'"
			}, {
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "R2 D' R U R' D R U R U' R' U' R"
			}, {
				type: "*",
				moveSet: "RUD",
				auf: "U",
				alg: "R U' R' U' R U R D R' U R D' R2"
			}]
		}]
	}, {
		name: "H",
		co: [1, 2, 1, 2],

		cases: [{
			perm: 0,
			algs: [{
				type: "*",
				moveSet: "RU",
				alg: "R U2 R' U' R U R' U' R U' R'"
			}]
		}, {
			perm: 1,
			algs: [{
				type: "*",
				moveSet: "RUL",
				auf: "U",
				alg: "R U R' U R U L' U R' U' L"
			}]
		}, {
			perm: 4,
			algs: [{
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "F R U' R' U R U2 R' U' R U R' U' F'"
			}]
		}, {
			perm: 5,
			algs: [{
				type: "*",
				moveSet: "RUF",
				alg: "F R U R' U' R U R' U' R U R' U' F'"
			}, {
				type: "*",
				moveSet: "RUF",
				alg: "F2 R' F2 R2 U2 R' F2"
			}]
		}]
	}, {
		name: "Pi",
		co: [2, 2, 1, 1],

		cases: [{
			perm: 0,
			algs: [{
				type: "*",
				moveSet: "RU",
				alg: "R U2 R2 U' R2 U' R2 U2 R"
			}, {
				type: "*",
				moveSet: "RUF",
				alg: "f R U R' U' f' F R U R' U' F"
			}]
		}, {
			perm: 1,
			algs: [{
				type: "*",
				moveSet: "RUF",
				alg: "R' F2 R U2 R U2 R' F2 U' R U' R'"
			}, {
				type: "*",
				moveSet: "RUL",
				alg: "R U2 R' U' R U' R2 U L U' R U L'"
			}]
		}, {
			perm: 2,
			algs: [{
				type: "*",
				moveSet: "RUF",
				alg: "R U R' U' R' F R2 U R' U' R U R' U' F'"
			}, {
				type: "*",
				moveSet: "RUL",
				alg: "R' U2 R U R' U R2 U' L' U R' U' L"
			}, {
				type: "*",
				moveSet: "RUF",
				alg: "R U R' U F2 R U2 R' U2 R' F2 R"
			}]
		}, {
			perm: 3,
			algs: [{
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "F U R U' R' U R U2 R' U' R U R' F'"
			}, {
				type: "*",
				moveSet: "RUF",
				alg: "R' U' F' R U R' U' R' F R2 U2 R' U2 R"
			}]
		}, {
			perm: 4,
			algs: [{
				type: "*",
				moveSet: "RUL",
				alg: "R U' L' U R' U L U L' U L"
			}, {
				type: "*",
				moveSet: "RU",
				alg: "r U' r' U' r U r' U' x' R2 U' R' U R' x"
			}, {
				type: "*",
				moveSet: "RUL",
				alg: "L U' R' U L' U R U R' U R"
			}]
		}, {
			perm: 5,
			algs: [{
				type: "*",
				moveSet: "RUD",
				alg: "R U D' R U R' D R2 U' R' U' R2' U2' R"
			}, {
				type: "*",
				moveSet: "RUF",
				auf: "U",
				alg: "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'"
			}, {
				type: ["TH"],
				moveSet: "RUF",
				alg: "F R2' U' R U' R U' R' U2 R' U R2 F'"
			}]
		}]
	}, {
		name: "L",
		co: [2, 0, 1, 0],

		cases: [{
			
		}, {
			perm: 1
		}, {
			perm: 2
		}, {
			perm: 3
		}, {
			perm: 4
		}, {
			perm: 5
		}]
	}, {
		name: "S",
		co: [1, 1, 1, 0],
		
		cases: []
	}, {
		name: "AS",
		co: [0, 2, 2, 2],

		cases: []
	}]
}