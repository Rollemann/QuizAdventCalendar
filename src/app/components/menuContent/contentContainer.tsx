import { useContentContext } from '@/app/contexts/ContentContext'
import ChatContent from './chatContent';
import RulesContent from './rulesContent';
import React from 'react'
import RankingContent from './rankingContent';
import RewardsContent from './rewardsContent';

type Position = 'self-end' | '';


export default function ContentContainer() {
    const { content } = useContentContext();

    let position: Position = '';
    switch (content) {
        case 'chat':
            position = "self-end";
            break;

        case 'ranking':
            position = '';
            break;

        case 'rewards':
            position = '';
            break;

        case 'rules':
            position = 'self-end';
            break;

        default:
            break;
    }

    return (
        <div className='flex flex-col w-11/12'>
            {content &&
                <div className={`${position} mx-1 w-max`}>
                    {content == 'chat' ? (
                        <ChatContent />
                    ) :
                        content == 'ranking' ? (
                            <RankingContent />
                        ) :
                            content == 'rewards' ? (
                                <RewardsContent />
                            ) :
                                content == 'rules' ? (
                                    <RulesContent />
                                ) : null
                }
                </div>}
        </div>
    )
}