import { RepositoryItem } from "../interfaces/RepositoryItem";
import { UserInfo } from "../interfaces/UserInfo";
import api from "./api";

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
    try {
        const response = await api.get(`/user/repos`, {
            params: {
                per_page: 100,
                sort: "created",
                direction: "desc",
                affiliation: "owner",
            }
        });

        const repositories: RepositoryItem[] = response.data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description ? repo.description : null,
            imageUrl: repo.owner ? repo.owner.avatar_url : null,
            owner: repo.owner ? repo.owner.login : null,
            language: repo.language ? repo.language : null,
        }));

        return repositories;

    } catch (error) {
        console.error("Ocurrió un error al obtener repositorios:", error);
        throw error;
    }
}

export const createRepository = async (repo: RepositoryItem): Promise<any> => {
    try {
        const body = {
            name: repo.name,
            description: repo.description || undefined,
            private: false,
        };
        const response = await api.post(`/user/repos`, body);
        return response.data;
    } catch (error) {
        console.error("Ocurrió un error al crear el repositorio:", error);
        throw error;
    }
};

export const updateRepository = async (owner: string, repoName: string, data: Partial<RepositoryItem>): Promise<any> => {
    try {
        // GitHub API uses PATCH to edit repositories
        const body: any = {};
        if (data.name) body.name = data.name;
        if (data.description !== undefined) body.description = data.description;
        if (data.language) body.language = data.language;
        const response = await api.patch(`/repos/${owner}/${repoName}`, body);
        return response.data;
    } catch (error) {
        console.error("Ocurrió un error al actualizar el repositorio:", error);
        throw error;
    }
};

export const deleteRepository = async (owner: string, repoName: string): Promise<void> => {
    try {
        await api.delete(`/repos/${owner}/${repoName}`);
    } catch (error) {
        console.error("Ocurrió un error al eliminar el repositorio:", error);
        throw error;
    }
};

export const getUserInfo = async (): Promise<UserInfo> => {
    try {
        const response = await api.get(`/user`);
        return response.data as UserInfo;
    } catch (error) {
        console.error("Ocurrió un error al obtener la información del usuario:", error);
        const userNotFound: UserInfo = {
            login: "undefined",
            name: "Usuario no encontrado",
            bio: "No se pudo obtener la información del usuario.",
            avatar_url: "https://img.icons8.com/ios_filled/1200/unfriend-male.jpg",
        }
        return userNotFound;
    }
};