var createAnimationSource = require('animachine-connect/create-animation-source')

//TODO: remove in prod
var projectSource = [
  {$id: 0, type: 'Project', name: 'jumping-box', timelines: [1]},
  {$id: 1, type: 'Timeline', name: 'jumping'},
]

var loadProject = new Promise(function (resolve) {
  var intervalID = setInterval(function () {
    if (typeof window.__animachineLoadProject === 'function') {
      clearInterval(intervalID)
      var project = window.__animachineLoadProject(projectSource)
      resolve(project)
    }
  }, 100)
})

var timelineSources = [{"name":"jumping","isPlaying":false,"currentTime":320,"length":2000,"pxpms":0.3,"width":2000,"start":20,"startMargin":6,"tracks":[{"name":"box","selectors":[{type:"css",query:":root"}],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"x","openInTimeline":true,"keys":[{"time":0,"value":400,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"1","type":"ease"},"id":"2","type":"key"}],"id":"5","type":"param"},{"name":"y","openInTimeline":true,"keys":[{"time":0,"value":250,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"6","type":"ease"},"id":"7","type":"key"},{"time":972,"value":250,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"8","type":"ease"},"id":"9","type":"key"},{"time":1492,"value":56.37050229077158,"selected":false,"ease":{"easeType":"bezier","pointAX":0.1769230769230769,"pointAY":0.7285714285714285,"pointBX":0.4923076923076922,"pointBY":0.9857142857142857,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"10","type":"ease"},"id":"11","type":"key"},{"time":2024,"value":250,"selected":false,"ease":{"easeType":"bezier","pointAX":0.46541353383458645,"pointAY":0.06190476190476191,"pointBX":0.8654135338345864,"pointBY":0.08095238095238089,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"12","type":"ease"},"id":"13","type":"key"}],"id":"14","type":"param"},{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":0,"value":0.5,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"15","type":"ease"},"id":"16","type":"key"}],"id":"17","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":0,"value":1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"18","type":"ease"},"id":"19","type":"key"}],"id":"20","type":"param"},{"name":"scaleX","openInTimeline":true,"keys":[{"time":0,"value":1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"21","type":"ease"},"id":"22","type":"key"},{"time":720,"value":1.6150102153435528,"selected":false,"ease":{"easeType":"bezier","pointAX":0.17222222222222222,"pointAY":0.49047619047619045,"pointBX":0.47777777777777775,"pointBY":0.9380952380952381,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"23","type":"ease"},"id":"24","type":"key"},{"time":804,"value":1.6150102153435528,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"25","type":"ease"},"id":"26","type":"key"},{"time":1420,"value":0.9,"selected":false,"ease":{"easeType":"bezier","pointAX":0.14485784485784484,"pointAY":0.9666666666666666,"pointBX":0.6805194805194805,"pointBY":1.0333333333333332,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"27","type":"ease"},"id":"28","type":"key"},{"time":1868,"value":1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"29","type":"ease"},"id":"30","type":"key"}],"id":"31","type":"param"},{"name":"scaleY","openInTimeline":true,"keys":[{"time":0,"value":1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"32","type":"ease"},"id":"33","type":"key"},{"time":720,"value":0.2565560638035217,"selected":true,"ease":{"easeType":"bezier","pointAX":0.044444444444444425,"pointAY":0.680952380952381,"pointBX":0.3555555555555555,"pointBY":0.8428571428571427,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"34","type":"ease"},"id":"35","type":"key"},{"time":804,"value":0.2565560638035217,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"36","type":"ease"},"id":"37","type":"key"},{"time":1420,"value":1.29,"selected":false,"ease":{"easeType":"bezier","pointAX":0.14485784485784484,"pointAY":0.9666666666666666,"pointBX":0.6805194805194805,"pointBY":1.0333333333333332,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"38","type":"ease"},"id":"39","type":"key"},{"time":1868,"value":1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"40","type":"ease"},"id":"41","type":"key"}],"id":"42","type":"param"}],"id":"44","type":"track"}],"id":"45","type":"timeline","currentTrackId":"44","inlineEaseEditor":{"top":126,"height":21,"targetKeyId":"35","controlledEaseIds":["34"]}}]
var animations = {}

timelineSources.forEach(function (timelineSource, index) {
  var gsapSource = createAnimationSource(
    timelineSource,
    //TODO remove in prod
    (rootTarget, gsapAnimation) => {
      loadProject
        .then(function (project) {
          project.timelines
            .find(function (timeline) {
              return timeline.name === timelineSource.name
            })
            .registerPreview(rootTarget, gsapAnimation)
        })
    }
  )
  animations[timelineSource.name] = gsapSource
})

module.exports = animations
