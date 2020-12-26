class AutoPause {

  constructor(){
    this.threshold = 0.25;
    this.hanldeIntersection = this.hanldeIntersection.bind(this);
  }
  
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.hanldeIntersection, 
      {
        threshold : this.threshold,
      });

    observer.observe(this.player.media);
  }

  hanldeIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible){
      this.player.play();
    }else{
      this.player.pause();
    }
  }
}

export default AutoPause;