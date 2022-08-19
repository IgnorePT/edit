export const http = {
    get: async (resource: string) => {
        const res = await fetch(resource);
        return res.json();
    },
    post: async (resource : string, data: any) => {
        const res = await fetch(resource, {});
        return res.json();
    }
}