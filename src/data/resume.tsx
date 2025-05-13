import { Icons } from "@/components/icons";
import Navbar from "@/components/navbar";
import { HomeIcon, NotebookIcon, Cog, FolderKanban, Info } from "lucide-react";

export const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+123456789",
		social: {
			email: {
				name: "Send Email",
				url: "mailto:divy.sangwan.176@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
			GitHub: {
				name: "GitHub",
				url: "https://github.com/divy-11",
				icon: Icons.github,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/11_devvv",
				icon: Icons.x,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/divy-sangwan/",
				icon: Icons.linkedin,

				navbar: true,
			},
			// Resume: {
			// 	name: "Resume",
			// 	url: "",

			// 	navbar: true,
			// },
		},
	},
} as const;
