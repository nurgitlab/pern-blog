import {db} from "../db.js";
import {DataTypes} from "sequelize";


const User = db.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
  imageUrl: {type: DataTypes.STRING},
    rang: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Category = db.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
})

const Post = db.define('post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  imageUrl: {type: DataTypes.STRING},
})

const RatingPost = db.define('rating_post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false},
})

const PostCategory = db.define('post_category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})



User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(RatingPost)
RatingPost.belongsTo(User)

Post.hasMany(RatingPost)
RatingPost.belongsTo(Post)

Post.belongsToMany(Category, {through: PostCategory})
Category.belongsToMany(Post, {through: PostCategory})

export {User, Post}



