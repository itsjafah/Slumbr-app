class Api::V1::BedsController < ApplicationController

  def index
    @beds = Bed.all
    render json: @beds, status: :ok
  end

  def show
    @bed = Bed.find_by(id: params[:id])
    render json: @bed, status: :ok
  end

end
