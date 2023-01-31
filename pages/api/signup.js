import axios from "axios";

export default function handler(req, res) {
    try {
        const { name, email, phoneNumber, password } = req.body;
        axios
            .post(`http://localhost:3200/v1/auth/signup`, {
                name,
                email,
                phoneNumber,
                password,
            })
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                res.status(400).json(error?.response?.data);
            });
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}
