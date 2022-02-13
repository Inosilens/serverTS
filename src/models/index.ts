import {Users} from './users/users'
import {Posts} from './posts/posts'

Users.hasMany(Posts)


export const Models = {Users,Posts}




