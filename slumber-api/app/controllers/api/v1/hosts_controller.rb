class Api::V1::HostsController < ApplicationController

  def index
    @hosts = Host.all
    render json: @hosts, status: :ok
  end

  def show
    @host = Host.find_by(id: params[:id])
    render json: @host, status: :ok
  end

  def create
    @host = Host.create(host_params)
    render json: @host, status: :created
  end

  def destroy
    @host = Host.find_by(id: params[:id])
    @host.destroy
    render json: @host, status: :created
  end

  private

  def host_params
    params.require(:host).permit(:name, :street_address, :city, :state, :zip, :email)
  end
end
