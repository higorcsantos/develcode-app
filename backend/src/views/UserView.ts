import { User } from "../models/User";


class UserView{
    render(user: User){
        return{
            id: user.id,
            name: user.name,
            birthDate: user.birthDate,
            image: `http://localhost:8888/uploads/${user.image}`
        }
    }
    renderMany(users: User[]){
        return users.map(user => this.render(user));
    }
}

export {UserView}