import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  create: async (lenOfEntities) => {
    const { data } = await httpService.post(todosEndepoint, {
      body: JSON.stringify({
        title: "New todo task with id " + lenOfEntities,
        completed: "false",
        userId: 1,
      }),
    });
    return { ...JSON.parse(data.body), id: lenOfEntities };
  },
};
export default todosService;
