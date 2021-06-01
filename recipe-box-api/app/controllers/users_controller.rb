class UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerialiazer.new(@user), jwt: @token}, status: :signup_successful
        else
            render json: { error: 'failed to create user'}, status: :signup_failed
        end 
    end
end
