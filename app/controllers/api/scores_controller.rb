class Api::ScoresController < ApplicationController
  before_action :authenticate_user!

  def index
    @scores = Score.order(value: :desc)
  end

  def create
    data = params.require(:score).permit(:value)
    score = current_user.scores.new(data)

    if score.save
      render json: score
    else
      render json: { errors: score.errors }, status: 422
    end
  end
end
