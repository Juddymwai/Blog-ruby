class ApplicationController < Sinatra::Base

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

   