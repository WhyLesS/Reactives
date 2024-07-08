import { useEffect, useReducer } from 'react';
import { useCounters } from '../../hooks/useCounters';

const INITIAL_FORM = {
    user: '',
    text: '',
    rating: 0,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case 'setUser':
            return { ...state, user: payload };
        case 'setText':
            return { ...state, text: payload };
        case 'setRating':
            return { ...state, rating: payload };
        case 'clear':
            return INITIAL_FORM;
        case 'save':
            // Как затычка, получается, типа что-то делаем здесь.
            return INITIAL_FORM;
        default:
            return state;
    }
}

const useForm = (initialValue) => {
    return useReducer(reducer, initialValue);
};

export const ReviewForm = () => {
    const [form, dispatch] = useForm(INITIAL_FORM);
    const { counters, increment, decrement, reset } = useCounters(1);
    const { user, text, rating } = form;

    useEffect(() => {
        dispatch({
            type: 'setRating',
            payload: counters[0].count,
        });
    }, [counters[0].count]);

    return (
        <div>
            <div>
                <span>User</span>
                <input
                    value={user}
                    onChange={(event) => {
                        dispatch({
                            type: 'setUser',
                            payload: event.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    value={text}
                    onChange={(event) => {
                        dispatch({
                            type: 'setText',
                            payload: event.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <span>Rating</span>
                <button onClick={() => increment(0)}>❤️</button>
                <span>{rating}</span>
                <button onClick={() => decrement(0)}>💔</button>
            </div>
            <button
                onClick={() => {
                    reset();
                    return dispatch({ type: 'save' });
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    reset();
                    return dispatch({ type: 'clear' });
                }}
            >
                Clear
            </button>
        </div>
    );
};
