import { mutations } from '../src/store';

const { SET_APPS_LIST, ADD_APP, DELETE_APP, UPDATE_APP } = mutations;

const state = {
   applications : []
};

const data = [
   {"id" : 0, "company" : "Elite foundaton"},
   {"id" : 1, "company" : "Mogate Foundation"},
   {"id" : 2, "company" : "Jester"}
];

test('Sets application list', () => {
   SET_APPS_LIST(state, { list : data });

   expect(state.applications.length).toBeGreaterThan(0);
   expect(state.applications[1].company).toBe("Mogate Foundation");
});

test('Add new application', () => {
   const app = {
      "id" : 3,
      "company" : "Lemon Juice"
   }
   ADD_APP(state, { application : app});
   expect(state.applications).toContain(app);
});

test('Deletes one application', () => {
   const app = {
      "id" : 3,
      "company" : "Lemon Juice"
   }

   DELETE_APP(state, {
      application : app
   });

   expect(state.applications).not.toContain(app);
});

test('One application is updated', () => {
   const newData = {
      "id" : 2,
      "company" : "Jester Foundation"
   }

   UPDATE_APP(state, {
      application : newData
   });

   expect(state.applications[2].company).toBe("Jester Foundation");
});