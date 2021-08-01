import { createSlice } from "@reduxjs/toolkit";
export const studentSlice = createSlice({
    name: "student",
    initialState: {
        todos: [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net"
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca",
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "username": "Leopoldo_Corkery",
                "email": "Karley_Dach@jasper.info",
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "username": "Elwyn.Skiles",
                "email": "Telly.Hoeger@billy.bi",
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "username": "Maxime_Nienow",
                "email": "Sherwood@rosamond.me",
            },

        ],
        todo: {
            "id": " ",
            "name": " ",
            "username": " ",
            "email": " ",
        }
    },
    reducers: {
        adduser: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteusr: (state, action) => {
            state.todos = state.todos.filter(({ id }) => id != action.payload)
        },
        updateuser: (state, action) => {
            state.todo = state.todos.find((user) => user.id == action.payload)
        },
        saveuser:(state, action) => {
            console.log(action.payload.previousId)
            let index = state.todos.findIndex(user => user.id === action.payload.previousId);
            console.log(index)
            state.todos[index]=action.payload
            console.log(state.todos);
            //console.log(state.todo)
            //state.todos=state.todos.splice(index,1,state.todo)
        }
    },
});

// Action creators are generated for each case reducer function
export const { adduser, deleteusr, updateuser,saveuser } = studentSlice.actions;

export default studentSlice.reducer;