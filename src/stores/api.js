import axios from "axios";

export const getRepos = async () => {
    try {
        const repos = await axios.get("https://api.github.com/users/Samuel833/repos", {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        return await repos;
    } catch (err) {
        console.log(err);
    }
}

export const getRepo = async (repo) => {
    try {
        const repo = await axios.get(`https://api.github.com/repos/Samuel833/${repo}`, {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        return await repo;
    } catch (err) {
        console.log(err);
    }
}
