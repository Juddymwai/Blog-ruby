class ApplicationController < Sinatra::Base

    get '/posts/:id' do
        post = Post.find(params[:id])
        post.to_json

    end

    get '/posts' do
        post = Post.all
        post.to_json(include: :reviews)
    end

    post '/posts' do

        post= Post.create(

            Title: params[:Title],
            Author: params[:Author],
            Content: params[:Content]
        )
        post.to_json
    end

    post '/reviews' do
        post = Review.create(
            comment: params[:comment],
            post_id: params[:post_id]
        )
        post.to_json
    end

    get '/reviews' do
        post =Review.all
        post.to_json
    end

    patch '/posts/:id' do
        post = Post.find(params[:id])
        post.update(
            Content: params[:Content],
            Author: params[:Author],
            Title: params[:Title]
        )
        post.to_json

    end

    delete '/posts/:id' do
        post = Post.find(params[:id])
        post.delete
        post.to_json
    end

    delete '/reviews/:id' do
        post = Review.find(params[:id])
        post.delete
        post.to_json
    end

end