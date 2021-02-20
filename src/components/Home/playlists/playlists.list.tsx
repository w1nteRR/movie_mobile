import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import { Button } from '../../common/styled/buttons/buttons.shared'
import { ScrollContainer } from '../../Film/scrollviews/Scroll.container'
import { PlaylistCard } from '../playlists/playlist.card'

import { useRedirect } from '../../../hooks/navigation/useRedirect'

import { IPlaylist } from '../../../interfaces/list/IPlaylist'

interface IFilmsCarousel {
  playlist: IPlaylist
}

export const PlaylistsList = memo<IFilmsCarousel>(({
  playlist
}) => {

  const { redirectToFilmScreen } = useRedirect()

  return (
    <ScrollContainer
      title={playlist.name}
      right={<Button bgColor='' w='45px' h='45px' iconSize={20} iconName='chevron-right' />}
    >
      <ScrollView horizontal>
        {
          playlist.films.map(item =>
            <PlaylistCard
              key={item._id}
              img={item.img}
              _id={item._id}
              onPress={redirectToFilmScreen}
            />
          )
        }
      </ScrollView>
    </ScrollContainer>
  )
})
