import { read, write } from '../utils/model.js';
import jwt from '../utils/jwt.js';

export let GET_POST = (req, res) => {
    try {
        let posts = read("posts")

        let filtered = posts.filter(post => post.status == "res")

        res.status(200).json({ status: 200, data: filtered })
    } catch (error) {
        res.status(403)
    }
}

export let GET_REJECTED = (req, res) => {
    try {
        let posts = read("posts")
        let filtered = posts.filter(post => post.status == "rejected")
        res.status(200).json({ status: 200, data: filtered })
    } catch (error) {
        res.status(403)
    }
}

export let GET_ACTIVE = (req, res) => {
    try {
        let posts = read("posts")

        let filtered = posts.filter(post => post.status == "active")

        res.status(200).json({ status: 200, data: filtered })
    } catch (error) {
        res.status(403)
    }
}

export let USERS_ACTIVATE = (req, res) => {
    try {
        let posts = read("posts")
        let { postId } = req.params
        let post = posts.find(post => post.postId == postId)
        
        if (post.status == "res") {
            post.status = "active"

            write("posts", posts)
            res.status(200).json({ status: 200, data: post })
        } else {
            res.status(400).json({ status: 400, message: "post not in result" })
        }
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message + "or post not found" })
    }
}

export let USERS__REJECTED = (req, res) => {
    try {
        let posts = read("posts")
        let { postId } = req.params

        let post = posts.find(post => post.postId == postId)
        if (post.status == "res") {
            post.status = "rejected"

            write("posts", posts)
            res.status(200).json({ status: 200, data: post })
        } else {
            res.status(400).json({ status: 400, message: "post not in result" })
        }
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message })
    }
}

export let USER_LOGIN = (req, res) => {
	try {
		let { username, password } = req.body;

		password = (password);
		let admins = read('admins');


		let use = admins.find(
			(user) => user.username == username && user.password == password
		);

		if (!use) {
			throw Error("user not found")
		}

		res.status(200).send({ status: 200, token: jwt.sign(use.adminId) });
	} catch (error) {
		res.status(404).send({ status: 404, message: error.message });
	}
};
