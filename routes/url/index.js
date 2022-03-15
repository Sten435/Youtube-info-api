import updatedYoutubeInfo from 'updated-youtube-info';

const Url = async (req, res) => {
	try {
		const id = req.params.id;
		if (id === null || id === undefined) return;

		updatedYoutubeInfo(id, function (err, videoInfo) {
			if (err) new Error(err);
			let response = {
				videoId: videoInfo.videoId,
				url: videoInfo.url,
				description: videoInfo.description,
				creator: videoInfo.creator,
				channelId: videoInfo.channelId,
				thumbnailUrl: videoInfo.thumbnailUrl,
				datePublished: videoInfo.datePublished,
				genre: videoInfo.genre,
				duration: videoInfo.duration,
				views: videoInfo.views,
			};
			res.status(200).json({ ...response, error: false });
		});
	} catch (error) {
		res.status(500).json({ error: true });
	}
};
export default Url;
