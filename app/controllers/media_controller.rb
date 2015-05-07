class MediaController < ApplicationController

  def new
    @baby = Baby.find(params[:baby_id])
    @event = Event.find(params[:event_id])
    @medium = Medium.new
  end

  def create
    @baby = Baby.find(params[:baby_id])
    # @event = Event.find(params[:event_id])
    # render :json => medium_params
    @medium = Medium.create(medium_params)
    redirect_to baby_events_path(@baby)
  end

  private

  def medium_params
    params.require(:medium).permit(:testurl)
  end

end