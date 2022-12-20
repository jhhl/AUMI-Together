# AUMI TOGETHER
AUMI Together has man layers to its project:

- a Web Based client app
- a cloud based server
- a web based admin app

There may also be native clients talking to the same server

The tech will separate some parts into js modules:

- ImageStream which will normalize video frame sources,
- - actual cameras
- - video files
- - generated test imagery
- - also doing the scaling, flipping, and contrast/brightness
- - may also provide effects like titling or plate removal

- Synthesizer
- - loads sforzando samples
- - controls synth slot assignment
- - controls timing queue
- - handles playing, cutting off and silencing
- - handles loop mixing
- - handles optional MIDI
- - - MIDI destinations, channel setting
- - - MIDI program/bank info
- - - MIDI acting as a timing source itself?

- File Maintenance
- - CRUD for files
- - - Setup files
- - - AUMI Instruments
- - - possibly clinical tracing files
- - File locations:
- - - part of the Webapp
- - - part of external collection
- - - sharing in and out
- - - Bluetooth??

- Conferencing
- - establishing sessions
- - authenticating participants
- - monitoring
- - group screen creation and formatting
- - audio mixing

